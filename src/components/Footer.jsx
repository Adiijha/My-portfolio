import React from 'react'


export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Made with ❤️ by Adii</p>
        
      </div>
    </footer>
  )
}