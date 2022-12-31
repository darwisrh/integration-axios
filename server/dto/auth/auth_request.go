package authdto

type LoginRequest struct {
	Email    string `gorm:"type: varchar(255)" json:"email" validate:"required"`
	Password string `gorm:"type: varchar(255)" json:"password" validate:"required"`
}

type RegisterRequest struct {
	Fullname string `gorm:"type: varchar(255)" json:"fullname"`
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Password string `gorm:"type: varchar(255)" json:"password"`
	Phone    string `gorm:"type: varchar(255)" json:"phone"`
	Address  string `gorm:"type: varchar(255)" json:"address"`
	Role     string `gorm:"type: varchar(255)" json:"role"`
}
