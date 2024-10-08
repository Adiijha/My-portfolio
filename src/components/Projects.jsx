import React from 'react'
import snake from '../assets/snake-game.png'
import gym from '../assets/gym-web.png'

const projects = [
  { id: 1, title: 'Snake Game', description: 'A interactive snake game with leaderboard functionality', img : snake, link :"https://snake-game-adiijha.vercel.app/" },
  { id: 2, title: 'Gym Website', description: 'A Gym website landing page', img: gym, link: "https://adiijha.github.io/GymWeb-dtuproject/" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-lg shadow-md p-6 w-full h-full flex items-center justify-center flex-col">
              <h3 className="text-white text-2xl font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-200 mb-5">{project.description}</p>
              <a href={project.link} target='blank'><img className="h-full w-11/12 flex items-center justify-center rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110" src={project.img} alt="" /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}