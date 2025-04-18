'use client'

import { useState, useEffect } from 'react'

interface Product {
    id: string | number
    name: string
    image: string
}
  
export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const fetchProducts = async () => {
    const res = await fetch('/api/products')
    const data = await res.json()
    setProducts(data)
  }

  const addProduct = async () => {
    await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, image }),
      headers: { 'Content-Type': 'application/json' },
    })
    setName('')
    setImage('')
    fetchProducts()
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Админка: Товары</h1>

      <input
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        placeholder="Ссылка на картинку"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2 rounded">
        Добавить
      </button>

      <div className="mt-6">
        {products?.map((p) => (
            <div key={p.id} className="border-b py-2">
                {p.name} — <img src={p.image} className="inline w-12 h-12 object-cover" />
            </div>
        ))}
      </div>
    </div>
  )
}
