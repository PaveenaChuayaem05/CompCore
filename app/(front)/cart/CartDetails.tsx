'use client'

import useCartService from '@/lib/hooks/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CartDetails() {
  const router = useRouter()
  const { items, itemsPrice, decrease, increase } = useCartService()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <div className="container mx-auto px-4">
      <h1 className="py-8 text-3xl font-bold text-center">Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center my-10">
          <p className="text-lg">Your cart is currently empty.</p>
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            Start shopping now
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 my-10">
          {/* Items List */}
          <div className="lg:col-span-3">
            <table className="w-full text-left bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-gray-100 border-b">
                <tr className="text-gray-700">
                  <th className="p-4 text-sm font-semibold">Item</th>
                  <th className="p-4 text-sm font-semibold">Quantity</th>
                  <th className="p-4 text-sm font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr
                    key={item.slug}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100 transition-all duration-200`}
                  >
                    <td className="p-4">
                      <Link href={`/product/${item.slug}`} className="flex items-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                        <span className="ml-4 text-lg font-medium text-gray-700">{item.name}</span>
                      </Link>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button
                          className="btn btn-sm bg-gray-300 text-gray-600 rounded-full hover:bg-gray-400"
                          type="button"
                          onClick={() => decrease(item)}
                        >
                          -
                        </button>
                        <span className="px-4 text-lg font-semibold">{item.qty}</span>
                        <button
                          className="btn btn-sm bg-gray-300 text-gray-600 rounded-full hover:bg-gray-400"
                          type="button"
                          onClick={() => increase(item)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-lg font-semibold text-gray-700">${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Checkout Summary */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold pb-4">Order Summary</h2>
              <ul className="space-y-4">
                <li className="text-lg">
                  Subtotal ({items.reduce((a, c) => a + c.qty, 0)} items):{' '}
                  <span className="font-bold text-gray-800">${itemsPrice}</span>
                </li>
                <li>
                  <button
                    onClick={() => router.push('/shipping')}
                    className="btn w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Proceed to Checkout
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push('/')}
                    className="btn w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
                  >
                    Continue Shopping
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
