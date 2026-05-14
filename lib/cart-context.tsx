"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export interface CartItem {
  id: string
  slug: string
  name: string
  price: number
  currency: string
  image: string
  color: string
  size: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
  shippingCost: number
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const SHIPPING_COST_USD = 10

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("mirr-cart")
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart)
          // Validate and migrate old cart format
          if (Array.isArray(parsed)) {
            const validItems = parsed.filter(item => 
              item && item.slug && item.name && item.price && item.size
            ).map((item, index) => ({
              id: item.id || `${item.slug}-${item.size}-${index}`,
              slug: item.slug,
              name: item.name,
              price: item.price,
              currency: item.currency || "USD",
              image: item.image || "",
              color: item.color || "Negro",
              size: item.size,
              quantity: item.quantity || 1
            }))
            setItems(validItems)
          }
        } catch (e) {
          console.error("Error parsing cart:", e)
          localStorage.removeItem("mirr-cart")
        }
      }
      setIsInitialized(true)
    }
  }, [])

  // Save cart to localStorage when items change
  useEffect(() => {
    if (isInitialized && typeof window !== "undefined") {
      localStorage.setItem("mirr-cart", JSON.stringify(items))
    }
  }, [items, isInitialized])

  const addItem = (newItem: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => {
    setItems(currentItems => {
      // Check if item with same slug and size already exists
      const existingIndex = currentItems.findIndex(
        item => item.slug === newItem.slug && item.size === newItem.size
      )

      if (existingIndex > -1) {
        // Update quantity of existing item
        const updated = [...currentItems]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + (newItem.quantity || 1)
        }
        return updated
      }

      // Add new item
      const id = `${newItem.slug}-${newItem.size}-${Date.now()}`
      return [...currentItems, { ...newItem, id, quantity: newItem.quantity || 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id)
      return
    }
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = items.length > 0 ? SHIPPING_COST_USD : 0
  const total = subtotal + shippingCost

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        shippingCost,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
