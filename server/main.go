package main

import (
	"dewetour/database"
	"dewetour/pkg/mysql"
	"dewetour/routes"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {

	mysql.DatabaseInit()

	database.RunMigration()

	r := mux.NewRouter()

	routes.RouteInit(r.PathPrefix("/api/v1").Subrouter())

	// Untuk mengakses file upload
	r.PathPrefix("/uploads").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

	fmt.Println("server running localhost:6000")
	http.ListenAndServe("localhost:6000", r)
}
