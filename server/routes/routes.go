package routes

import (
	"github.com/gorilla/mux"
)

func RouteInit(r *mux.Router) {
	AuthRoutes(r)
	UserRoutes(r)
	CountryRoutes(r)
	TripRoute(r)
	TransacRoute(r)
}
