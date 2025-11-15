package db

import (
	"context"
	"log"
	"os"
	"sync"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	Client       *mongo.Client
	Once         sync.Once
	Database     *mongo.Database
	DatabaseName = "kingpin"
)

func Connect() {
	Once.Do(func() {
		mongoURI := os.Getenv("MONGODB_URI")
		clientOptions := options.Client().ApplyURI(mongoURI)

		Client, err := mongo.Connect(context.Background(), clientOptions)
		if err != nil {
			log.Fatalf("❌Failed to connect to MongoDB: %v", err)
		}

		if err = Client.Ping(context.Background(), nil); err != nil {
			log.Fatalf("❌MongoDB is unreachable: %v", err)
		}

		Database = Client.Database(DatabaseName)
		log.Println("✔️Connected to MongoDB")

	})
}
