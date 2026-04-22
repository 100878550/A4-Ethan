import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ItemsContext } from '../context/ItemsContext'

export default function DetailView(){
  const { id } = useParams()
  const ctx = useContext(ItemsContext)
  const item = ctx.items.find(i => i.id == id)

  if (!item) {
    return (
      <div>
        <div className="mb-3"><Link className="btn btn-sm btn-outline-secondary" to="/list">← Back to list</Link></div>
        <div className="alert alert-danger">Item not found.</div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-3"><Link className="btn btn-sm btn-outline-secondary" to="/list">← Back to list</Link></div>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p className="card-text text-muted">{item.category}</p>
          <p className="card-text">Price: ${item.price}</p>
          {item.rating && <p className="card-text">Rating: {item.rating}/5</p>}
          {item.description && <p className="card-text">{item.description}</p>}
        </div>
      </div>
    </div>
  )
}
