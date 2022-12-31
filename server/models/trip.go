package models

type Trip struct {
	ID             int             `json:"id"`
	Title          string          `json:"title" gorm:"type: varchar(255)"`
	CountryId      int             `json:"countryid" form:"countryid"`
	Country        CountryResponse `json:"country"`
	Accomodation   string          `json:"accomodation" gorm:"type: varchar(100)"`
	Transportation string          `json:"transportation" gorm:"type: varchar(100)"`
	Eat            string          `json:"eat" gorm:"type: varchar(50)"`
	Day            int             `json:"day" gorm:"type: int(11)"`
	Night          int             `json:"night" gorm:"type: int(11)"`
	DateTrip       string          `json:"datetrip" gorm:"type: varchar(50)"`
	Price          int             `json:"price"`
	Quota          int             `json:"quota"`
	QtyCounter     int             `json:"qtyCounter"`
	Description    string          `json:"description" gorm:"type: varchar(255)"`
	Image          string          `json:"image" gorm:"type: varchar(100)"`
}

type TripResponse struct {
	ID             int             `json:"id"`
	Title          string          `json:"title" gorm:"type: varchar(255)"`
	CountryId      int             `json:"countryid" form:"countryid" gorm:"type: foreignkey"`
	Country        CountryResponse `json:"country"`
	Accomodation   string          `json:"accomodation" gorm:"type: varchar(100)"`
	Transportation string          `json:"transportation" gorm:"type: varchar(100)"`
	Eat            string          `json:"eat" gorm:"type: varchar(50)"`
	Day            int             `json:"day" gorm:"type: int(11)"`
	Night          int             `json:"night" gorm:"type: int(11)"`
	DateTrip       string          `json:"datetrip" gorm:"type: varchar(50)"`
	Price          int             `json:"price"`
	Quota          int             `json:"quota"`
	QtyCounter     int             `json:"qtycounter" gorm:"type: int(11)"`
	Description    string          `json:"description" gorm:"type: varchar(255)"`
	Image          string          `json:"image" gorm:"type: varchar(100)"`
}

func (TripResponse) TableName() string {
	return "trips"
}
