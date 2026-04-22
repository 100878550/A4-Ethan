import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import { ItemsContext } from '../context/ItemsContext'

export default function ListView(){
  const ctx = useContext(ItemsContext)
  const navigate = useNavigate()

  const handleView = (id) => navigate(`/item/${id}`)
  const handleEdit = (id) => navigate(`/edit/${id}`)
  const handleDelete = (id) => ctx.deleteItem(id)

  return (
    <div>
      <div className="row g-2 align-items-end mb-3">
        <div className="col-md-3">
          <label className="form-label">Search</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={ctx.search}
            onChange={e => ctx.setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={ctx.category}
            onChange={e => ctx.setCategory(e.target.value)}
          >
            <option value="">All</option>
            {ctx.categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="col-md-2">
          <label className="form-label">Min Price</label>
          <input
            type="number"
            className="form-control"
            value={ctx.minValue}
            onChange={e => ctx.setMinValue(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Max Price</label>
          <input
            type="number"
            className="form-control"
            value={ctx.maxValue}
            onChange={e => ctx.setMaxValue(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label">Sort By</label>
          <select
            className="form-select"
            value={ctx.sortKey}
            onChange={e => ctx.setSortKey(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="col-md-1">
          <label className="form-label">Order</label>
          <select
            className="form-select"
            value={ctx.sortDir}
            onChange={e => ctx.setSortDir(e.target.value)}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
      </div>

      {ctx.derived.length === 0 ? (
        <div className="alert alert-info">No items found. <a href="/new">Create one</a>?</div>
      ) : (
        <div className="row g-3">
          {ctx.derived.map(item => (
            <div key={item.id} className="col-md-4">
              <ItemCard
                item={item}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
