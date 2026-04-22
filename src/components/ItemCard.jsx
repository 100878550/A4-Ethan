import React from 'react'

export default function ItemCard({ item, onView, onEdit, onDelete }){
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text text-muted">{item.category}</p>
        <p className="card-text">Price: ${item.price}</p>
        {item.rating && <p className="card-text">Rating: {item.rating}/5</p>}
        {item.description && <p className="card-text">{item.description}</p>}
      </div>
      <div className="card-footer d-flex justify-content-end gap-2">
        <button className="btn btn-sm btn-outline-primary" onClick={() => onView(item.id)}>View</button>
        <button className="btn btn-sm btn-outline-secondary" onClick={() => onEdit(item.id)}>Edit</button>
        <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  )
}
