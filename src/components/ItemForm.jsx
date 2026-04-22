import React, { useState } from 'react'

export default function ItemForm({ initial, onSave, onCancel }){
  const [name, setName] = useState(initial?.name || '')
  const [category, setCategory] = useState(initial?.category || '')
  const [price, setPrice] = useState(initial?.price || '')
  const [rating, setRating] = useState(initial?.rating || '')
  const [description, setDescription] = useState(initial?.description || '')
  const [errors, setErrors] = useState({})

  function validate(){
    const errs = {}
    if (!name.trim()) errs.name = 'Name is required'
    if (!category.trim()) errs.category = 'Category is required'
    if (price !== '' && (isNaN(price) || parseFloat(price) < 0)) errs.price = 'Price must be a positive number'
    if (rating !== '' && (isNaN(rating) || parseFloat(rating) < 0 || parseFloat(rating) > 5)) errs.rating = 'Rating must be between 0 and 5'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function onSubmit(e){
    e.preventDefault()
    if (validate()) {
      onSave({
        name: name.trim(),
        category: category.trim(),
        price: parseFloat(price) || 0,
        rating: parseFloat(rating) || 0,
        description: description.trim()
      })
    }
  }

  return (
    <form className="row g-3" onSubmit={onSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Name *</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="col-md-6">
        <label className="form-label">Category *</label>
        <input
          type="text"
          className={`form-control ${errors.category ? 'is-invalid' : ''}`}
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        {errors.category && <div className="invalid-feedback">{errors.category}</div>}
      </div>
      <div className="col-md-6">
        <label className="form-label">Price</label>
        <input
          type="number"
          step="0.01"
          className={`form-control ${errors.price ? 'is-invalid' : ''}`}
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        {errors.price && <div className="invalid-feedback">{errors.price}</div>}
      </div>
      <div className="col-md-6">
        <label className="form-label">Rating (0-5)</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
          value={rating}
          onChange={e => setRating(e.target.value)}
        />
        {errors.rating && <div className="invalid-feedback">{errors.rating}</div>}
      </div>
      <div className="col-12">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows="3"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save</button>
        {onCancel && <button className="btn btn-secondary" type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  )
}
