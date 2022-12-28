package routes

import (
	"dewetour/handlers"
	"dewetour/pkg/middleware"
	"dewetour/pkg/mysql"
	"dewetour/repositories"

	"github.com/gorilla/mux"
)

func CountryRoutes(r *mux.Router) {
	CountryReposito := repositories.RepositoryCountry(mysql.DB)
	h := handlers.HandlerCountry(CountryReposito)

	r.HandleFunc("/countries", h.FindCountry).Methods("GET")
	r.HandleFunc("/country", middleware.Auth(h.CreateCountry)).Methods("POST")
	r.HandleFunc("/country/{id}", middleware.Auth(h.UpdateCountry)).Methods("PATCH")
	r.HandleFunc("/country/{id}", h.GetCountry).Methods("GET")
	r.HandleFunc("/country/{id}", middleware.Auth(h.DeleteCountry)).Methods("DELETE")
}
