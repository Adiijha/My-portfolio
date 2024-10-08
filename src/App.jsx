import React from 'react'
import Header from './components/Header'
import Front from './components/Front'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Front />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}