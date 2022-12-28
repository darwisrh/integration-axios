package handlers

import (
	dto "dewetour/dto/result"
	tripdto "dewetour/dto/trip"
	"dewetour/models"
	"dewetour/repositories"
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-playground/validator"
	"github.com/gorilla/mux"
)

var path_file = "http://localhost:6000/uploads/"

type handleTrip struct {
	TripRepository repositories.TripRepository
}

func HandleTrip(TripRepository repositories.TripRepository) *handleTrip {
	return &handleTrip{TripRepository}
}

func (h *handleTrip) FindTrip(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	trip, err := h.TripRepository.FindTrip()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode((err.Error()))
	}
	for i, p := range trip {
		trip[i].Image = path_file + p.Image
	}
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: trip}
	json.NewEncoder(w).Encode(response)

}

func (h *handleTrip) GetTrip(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	trip, err := h.TripRepository.GetTrip(id)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(err.Error())
		return
	}
	trip.Image = path_file + trip.Image
	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: trip}
	json.NewEncoder(w).Encode(response)
}

func (h *handleTrip) DeleteTrip(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	trip, err := h.TripRepository.GetTrip(id)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	data, err := h.TripRepository.DeleteTrip(trip)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseTrip(data)}
	json.NewEncoder(w).Encode(response)
}

func convertResponseTrip(u models.Trip) tripdto.TripResponse {
	return tripdto.TripResponse{
		ID:    u.ID,
		Title: u.Title,

		Accomodation: u.Accomodation,
		Transport:    u.Transportation,
		Eat:          u.Eat,
		Day:          u.Day,
		Night:        u.Night,
		Date:         u.DateTrip,
		Price:        u.Price,
		Kuota:        u.Quota,
		Description:  u.Description,
		Image:        u.Image,
	}
}

func (h *handleTrip) CreateTrip(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	dataContex := r.Context().Value("dataFile") // add this code
	filename := dataContex.(string)             // add this code

	countryid, _ := strconv.Atoi(r.FormValue("countryid"))
	price, _ := strconv.Atoi(r.FormValue("price"))
	kuota, _ := strconv.Atoi(r.FormValue("quota"))
	request := tripdto.TripRequest{
		Title:        r.FormValue("title"),
		CountryId:    countryid,
		Accomodation: r.FormValue("accomodation"),
		Transport:    r.FormValue("transportation"),
		Eat:          r.FormValue("eat"),
		Day:          r.FormValue("day"),
		Night:        r.FormValue("night"),
		Date:         r.FormValue("date"),
		Price:        price,
		Kuota:        kuota,
		Description:  r.FormValue("description"),
		Image:        filename,
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	trip := models.Trip{
		Title:          request.Title,
		CountryId:      request.CountryId,
		Accomodation:   request.Accomodation,
		Transportation: request.Transport,
		Eat:            request.Eat,
		Day:            request.Day,
		Night:          request.Night,
		DateTrip:       request.Date,
		Price:          request.Price,
		Quota:          request.Kuota,
		Description:    request.Description,
		Image:          request.Image,
	}

	data, err := h.TripRepository.Createtrip(trip)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: data}
	json.NewEncoder(w).Encode(response)
}

func (h *handleTrip) UpdateTrip(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	trip, err := h.TripRepository.GetTrip(int(id))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	price, _ := strconv.Atoi(r.FormValue("price"))
	quota, _ := strconv.Atoi(r.FormValue("quota"))

	if r.FormValue("title") != "" {
		trip.Title = r.FormValue("title")
	}

	if r.FormValue("accomodation") != "" {
		trip.Accomodation = r.FormValue("accomodation")
	}

	if r.FormValue("transportation") != "" {
		trip.Transportation = r.FormValue("transportation")
	}

	if r.FormValue("eat") != "" {
		trip.Eat = r.FormValue("eat")
	}

	if r.FormValue("day") != "" {
		trip.Day = r.FormValue("day")
	}

	if r.FormValue("night") != "" {
		trip.Night = r.FormValue("night")
	}

	if r.FormValue("date") != "" {
		trip.DateTrip = r.FormValue("date")
	}

	if r.FormValue("price") != "" {
		trip.Price = price
	}

	if r.FormValue("quota") != "" {
		trip.Quota = quota
	}

	if r.FormValue("description") != "" {
		trip.Description = r.FormValue("description")
	}

	data, err := h.TripRepository.UpdateTrip(trip)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: data}
	json.NewEncoder(w).Encode(response)
}
