package routes

import (
	controllers "github.com/edisss1/kingpin/controllers"
	"github.com/gin-gonic/gin"
)

func AuthRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.POST("auth/signup", controllers.Signup())
	incomingRoutes.POST("auth/login", controllers.Login())
}
