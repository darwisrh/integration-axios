package routes

import (
	"dewetour/handlers"
	"dewetour/pkg/middleware"
	"dewetour/pkg/mysql"
	"dewetour/repositories"

	"github.com/gorilla/mux"
)

func TripRoute(r *mux.Router) {
	tripRepository := repositories.RepositoryTrip(mysql.DB)
	h := handlers.HandleTrip(tripRepository)

	r.HandleFunc("/trips", h.FindTrip).Methods("GET")
	r.HandleFunc("/trip/{id}", h.GetTrip).Methods("GET")
	r.HandleFunc("/trip", middleware.UploadFile(h.CreateTrip)).Methods("POST")
	r.HandleFunc("/trip/{id}", h.UpdateTrip).Methods("PATCH")
	r.HandleFunc("/trip/{id}", h.DeleteTrip).Methods("DELETE")
}
