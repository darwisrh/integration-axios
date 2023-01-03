package repositories

import (
	"dewetour/models"

	"gorm.io/gorm"
)

type TransactionRepo interface {
	CreateTransaction(transac models.TransactionModels) (models.TransactionModels, error)
	FindTransaction() ([]models.TransactionModels, error)
	GetTransaction(ID int) (models.TransactionModels, error)
	DeleteTransaction(transac models.TransactionModels) (models.TransactionModels, error)
	UpdateTransaction(status string, ID int) (models.TransactionModels, error)
	GetOneTransaction(ID string) (models.TransactionModels, error)
}

func RepositoryTransac(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) GetTransaction(ID int) (models.TransactionModels, error) {
	var transaction models.TransactionModels
	err := r.db.Preload("Trip.Country").Preload("User").Find(&transaction, ID).Error

	return transaction, err
}

func (r *repository) CreateTransaction(transac models.TransactionModels) (models.TransactionModels, error) {
	err := r.db.Preload("Trip.Country").Preload("User").Create(&transac).Error

	return transac, err
}

func (r *repository) FindTransaction() ([]models.TransactionModels, error) {
	var Transac []models.TransactionModels
	err := r.db.Preload("Trip.Country").Preload("User").Find(&Transac).Error

	return Transac, err
}

func (r *repository) DeleteTransaction(transac models.TransactionModels) (models.TransactionModels, error) {
	err := r.db.Delete(&transac).Error

	return transac, err
}

func (r *repository) UpdateTransaction(status string, ID int) (models.TransactionModels, error) {
	var transaction models.TransactionModels
	r.db.Preload("Product").First(&transaction, ID)

	// If is different & Status is "success" decrement product quantity
	if status != transaction.Status && status == "success" {
		var trip models.Trip
		r.db.First(&trip, transaction.Trip.ID)
		trip.Quota = trip.Quota - 1
		r.db.Save(&trip)
	}

	transaction.Status = status

	err := r.db.Save(&transaction).Error

	return transaction, err
}

func (r *repository) GetOneTransaction(ID string) (models.TransactionModels, error) {
	var transaction models.TransactionModels
	err := r.db.Preload("Product").Preload("Product.User").Preload("Buyer").Preload("Seller").First(&transaction, "id = ?", ID).Error

	return transaction, err
}
