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
	UpdateTransaction(trip models.TransactionModels) (models.TransactionModels, error)
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

func (r *repository) UpdateTransaction(transac models.TransactionModels) (models.TransactionModels, error) {
	err := r.db.Save(&transac).Error

	return transac, err
}
