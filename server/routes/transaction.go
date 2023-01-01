package routes

import (
	"dewetour/handlers"
	// "dewetour/pkg/middleware"
	"dewetour/pkg/middleware"
	"dewetour/pkg/mysql"
	"dewetour/repositories"

	"github.com/gorilla/mux"
)

func TransacRoute(r *mux.Router) {
	transacRepository := repositories.RepositoryTransac(mysql.DB)
	h := handlers.HandleTransac(transacRepository)

	r.HandleFunc("/transaction", middleware.Auth(h.CreateTransaction)).Methods("POST")
	r.HandleFunc("/transactions", h.FindTransaction).Methods("GET")
	r.HandleFunc("/transaction/{id}", h.GetTransaction).Methods("GET")
	r.HandleFunc("/transaction/{id}", middleware.Auth(h.DeleteTransaction)).Methods("DELETE")
	// r.HandleFunc("/transaction/{id}", h.UpdateTransaction).Methods("PATCH")
	r.HandleFunc("/notification", h.Notification).Methods("POST")
}
