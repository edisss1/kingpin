package controllers

import (
	"context"
	"log"
	"net/http"
	"time"

	"github.com/edisss1/kingpin/db"
	"github.com/edisss1/kingpin/helpers"
	"github.com/edisss1/kingpin/models"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
	"golang.org/x/crypto/bcrypt"
)

var userCollection = db.Database.Collection("users")
var validate = validator.New()

func HashPassword(p string) string {
	hash, _ := bcrypt.GenerateFromPassword([]byte(p), bcrypt.DefaultCost)
	return string(hash)
}

func VerifyPassword(p, hashedPassword string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(p))
	return err == nil
}

func Signup() gin.HandlerFunc {
	return func(c *gin.Context) {
		ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)

		var user models.User

		if err := c.BindJSON(&user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		validationErr := validate.Struct(user)
		if validationErr != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": validationErr.Error()})
			return

		}

		count, err := userCollection.CountDocuments(ctx, bson.M{"email": user.Email})

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			log.Panic(err)

		}
		defer cancel()

		if count > 0 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "user already exists"})
		}

	}
}

func Login() {}

func GetUser() gin.HandlerFunc {
	return func(c *gin.Context) {
		userID := c.Param("userID")

		if err := helpers.MatchUserTypeToUserID(c, userID); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		ctx, cancel := context.WithTimeout(context.Background(), 100*time.Second)

		var user models.User

		filter := bson.M{"userID": userID}

		err := userCollection.FindOne(ctx, filter).Decode(&user)
		defer cancel()

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, user)

	}
}
