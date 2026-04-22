import { useEffect, useMemo, useState } from 'react'
const STORAGE_KEY = 'a4_items'

export default function useItems(){
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sortKey, setSortKey] = useState('name')
  const [sortDir, setSortDir] = useState('asc')
  const [minValue, setMinValue] = useState('')
  const [maxValue, setMaxValue] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setItems(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function addItem(data){
    setItems(prev => [...prev, { id: Date.now(), ...data }])
  }

  function updateItem(id, patch){
    setItems(prev => prev.map(item => item.id === id ? { ...item, ...patch } : item))
  }

  function deleteItem(id){
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const categories = useMemo(() => {
    return [...new Set(items.map(item => item.category))].sort()
  }, [items])

  const derived = useMemo(() => {
    let filtered = items.filter(item => {
      if (search && !item.name.toLowerCase().includes(search.toLowerCase())) return false
      if (category && item.category !== category) return false
      if (minValue && item.price < parseFloat(minValue)) return false
      if (maxValue && item.price > parseFloat(maxValue)) return false
      return true
    })

    filtered.sort((a, b) => {
      let aVal = a[sortKey]
      let bVal = b[sortKey]
      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase()
        bVal = bVal.toLowerCase()
      }
      if (sortDir === 'asc') {
        return aVal > bVal ? 1 : aVal < bVal ? -1 : 0
      } else {
        return aVal < bVal ? 1 : aVal > bVal ? -1 : 0
      }
    })

    return filtered
  }, [items, search, category, minValue, maxValue, sortKey, sortDir])

  return {
    items, setItems,
    search, setSearch,
    category, setCategory,
    sortKey, setSortKey,
    sortDir, setSortDir,
    minValue, setMinValue,
    maxValue, setMaxValue,
    categories,
    derived,
    addItem, updateItem, deleteItem
  }
}
