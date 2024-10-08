import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Contact Me </h2>
        <div className=" bg-slate-800 pt-12 pb-12 ml-96 mr-96 rounded-3xl">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4 ">
            <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-white text-black py-3 px-7 rounded-md hover:bg-gray-300 transition duration-300">Send Message</button>
        </form>
        </div>
      </div>
    </section>
  )
}