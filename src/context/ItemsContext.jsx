import React, { createContext } from 'react'
import useItems from '../hooks/useItems'

export const ItemsContext = createContext(null)

export function ItemsProvider({ children }) {
  const itemsState = useItems()

  const value = {
    ...itemsState
  }

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}
