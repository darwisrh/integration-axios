package models

type Country struct {
	ID   int    `json:"id"`
	Name string `json:"name" form:"name" gorm:"type: varchar(100)"`
}

type CountryResponse struct {
	ID   int    `json:"id"`
	Name string `json:"name" gorm:"type: varchar(100)"`
}

func (CountryResponse) TableName() string {
	return "countries"
}
