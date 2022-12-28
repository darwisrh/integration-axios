package transactiondto

type TransRequest struct {
	CounterQty int    `json:"counterqty" form:"counterqty" validation:"required"`
	Total      int    `json:"total" form:"total" validation:"required"`
	Status     string `json:"status:" form:"status" gorm:"type: varchar(100)" validation:"required"`
	Attachment string `json:"attachment:" form:"attachment" gorm:"type: varchar(100)" validation:"required"`
	TripId     int    `json:"trip_id" form:"trip_id" validation:"required"`
	UserId     int    `json:"user_id" form:"user_id" validation:"required"`
}
