"use client"

import { useState, useEffect } from 'react'

// Удалим импорт motion, так как мы его не используем
// import { motion } from 'framer-motion'

const FloatingShape = ({ color, size, key }: { color: string; size: string; key: string }) => {
  const randomDuration = Math.random() * 5 + 10; // от 10 до 15 секунд
  const randomDelay = Math.random() * 2; // от 0 до 2 секунд задержки
  const randomDirection = Math.random() > 0.5 ? 1 : -1; // случайное направление

  return (
    <div
      key={key}
      className={`absolute border-2 rounded-lg ${color} opacity-20`} // Добавлен класс opacity-20
      style={{
        width: size,
        height: size,
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
        animation: `float${randomDirection > 0 ? '' : 'Reverse'} ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`
      }}
    />
  )
}

const AnimatedGradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
    {children}
  </span>
)

export function Rasta() {
  const [text] = useState('Futuristic interface')
  // const [text, setText] = useState('Futuristic interface')
  const [key, setKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1)
    }, Math.random() * 7000 + 7000) // Случайный интервал от 7 до 14 секунд

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden relative bg-gray-950 text-gray-100">
      {/* Floating shapes */}
      <FloatingShape key={`yellow-${key}`} color="border-yellow-500" size="200px" />
      {[...Array(5)].map((_, i) => (
        <FloatingShape key={`blue-${i}-${key}`} color="border-blue-500" size="100px" />
      ))}
      {[...Array(5)].map((_, i) => (
        <FloatingShape key={`green-${i}-${key}`} color="border-green-400" size="100px" />
      ))}

      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-gray-900 bg-opacity-40 backdrop-blur-md">
        <div className="text-xl font-bold">
          <AnimatedGradientText>FUTURA</AnimatedGradientText>
        </div>
        <div className="flex space-x-6">
          {['Home', 'About', 'Products', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider">{item}</a>
          ))}
        </div>
        <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm uppercase tracking-wider">
          Get Started
        </button>
      </nav>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
        <h1 className="text-6xl font-bold mb-4 text-center">
          <AnimatedGradientText>{text}</AnimatedGradientText>
        </h1>
        <p className="text-xl text-gray-400 text-center max-w-2xl">
          Experience the cutting-edge interface of tomorrow, today. Immerse yourself in a world where technology and design seamlessly blend.
        </p>
        <div className="mt-8 flex space-x-4">
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
            Explore Now
          </button>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-opacity-80 transition-all duration-300">
            Learn More
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-4 bg-gray-900 bg-opacity-40 backdrop-blur-md text-center">
        <p className="text-sm text-gray-400">© 2024 FUTURA. All rights reserved.</p>
      </footer>
    </div>
  )
}