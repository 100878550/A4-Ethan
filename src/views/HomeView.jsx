import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeView(){
  return (
    <div className="p-4 bg-light rounded">
      <h2 className="h4 mb-3">Welcome to Capstone Catalog</h2>
      <p className="mb-3">Manage your collection of items with ease. Browse, add, edit, and organize your catalog.</p>
      <div className="d-flex gap-2">
        <Link className="btn btn-primary" to="/list">Browse Items</Link>
        <Link className="btn btn-outline-primary" to="/new">Add New Item</Link>
      </div>
    </div>
  )
}
