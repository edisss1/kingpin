package helpers

import (
	"errors"

	"github.com/gin-gonic/gin"
)

func CheckUserType(c *gin.Context, role string) (err error) {
	userType := c.GetString("userType")
	err = nil

	if userType != role {
		err = errors.New("unauthorized access")
	}

	return err
}

func MatchUserTypeToUserID(c *gin.Context, userID string) (err error) {
	userType := c.GetString("userType")
	uid := c.GetString("userID")

	err = nil

	if userType == "USER" && uid != userID {
		err = errors.New("unauthorized access")
		return err
	}

	err = CheckUserType(c, userType)

	return err
}
