import React from 'react'

export default function Front() {
  return (
    <section id="home" className="bg-black text-white py-20">
      <div className="container mx-auto h-96 px-6 mt-10 text-center flex justify-center items-center flex-col">
        <h1 className="text-6xl font-bold mb-8">Welcome to My Portfolio 👋🏼 </h1>
        <p className="text-2xl mb-2"> My Name is Aditya Kumar Jha</p>
        <p className="text-2xl mb-8"> I code experiences 🧑🏽‍💻</p>
        <a href="#contact" className="bg-white text-black py-3 px-8 rounded-full text-xl hover:bg-gray-300 transition duration-300">Get in Touch</a>
      </div>
    </section>
  )
}