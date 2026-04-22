import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemForm from '../components/ItemForm'
import { ItemsContext } from '../context/ItemsContext'

export default function CreateEditView(){
  const { id } = useParams()
  const navigate = useNavigate()
  const ctx = useContext(ItemsContext)

  const item = id ? ctx.items.find(i => i.id == id) : null
  const initial = item || {}

  const handleSave = (data) => {
    if (id) {
      ctx.updateItem(parseInt(id), data)
    } else {
      ctx.addItem(data)
    }
    navigate('/list')
  }

  const handleCancel = () => navigate(-1)

  return (
    <div>
      <h2 className="h5 mb-3">{id ? 'Edit Item' : 'Add Item'}</h2>
      <ItemForm
        initial={initial}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  )
}
