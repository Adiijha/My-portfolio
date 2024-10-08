import React from 'react'
import html from '../assets/html.jpeg'
import css from '../assets/css.jpeg'
import js from '../assets/js.jpeg'
import react from '../assets/react.jpeg'
import node from '../assets/node-js.jpeg'
import git from '../assets/git.jpeg'
import tailwind from '../assets/tailwind.jpeg'
import mongodb from '../assets/mongodb.jpeg'
import express from '../assets/express.jpeg'
import postgres from '../assets/postgres.jpeg'

const technologies = [
    { name: 'HTML5', icon: html },
    { name: 'CSS3', icon: css },
    { name: 'JavaScript', icon: js },
  { name: 'React', icon: react },
  { name: 'tailwind', icon: tailwind },
  { name: 'Node.js', icon: node },
  { name: 'Express.js', icon: express },
  { name: 'MongoDB', icon: mongodb },
  { name: 'PostgreSQL', icon: postgres },
  { name: 'Git/GitHub', icon: git },
]

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white ">Technologies I Know</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pl-16 pr-16 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-slate-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center transition-transform hover:scale-105">
              <span className="text-4xl mb-2 h-14 w-14"><img src={tech.icon} alt="" /></span>
              <h3 className="text-lg font-semibold  text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}