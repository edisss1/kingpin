package routes

import (
	"github.com/edisss1/kingpin/controllers"
	"github.com/edisss1/kingpin/middleware"
	"github.com/gin-gonic/gin"
)

func UserRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.Use(middleware.Authenticate())
	incomingRoutes.GET("/users/:userID", controllers.GetUser())

}
