package transactiondto

type TransResponse struct {
	ID         int    `json:"id"`
	CounterQty int    `json:"counterqty" form:"counterqty"`
	Total      int    `json:"total" form:"total"`
	Status     string `json:"status" form:"status" gorm:"type: varchar(100)"`
	Attachment string `json:"attachment" form:"attachment" gorm:"type: varchar(100)"`
	TripId     int    `json:"trip_id" from:"trip_id"`
	UserId     int    `json:"user_id" from:"user_id"`
}
