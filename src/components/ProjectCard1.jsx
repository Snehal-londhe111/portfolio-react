
import React from 'react'
import bookproject from '../assets/bookproject.jpeg'
import Projects from './Projects'

const ProjectCard1 = () => {
  return (
    <div className='bg-dark-100 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
        {/* Image */}
        <img src={bookproject} alt="project Image" className='w-full h-60 object-cover' />
        
        {/* Content */}
        <div className='p-5'>
            <h3 className='text-xl font-semibold mb-2'>Book Store System</h3>

            <p className='text-gray-400 mb-4'>A full-featured book store with insert, update and books.</p>

            {/* tech tags */}
            <div className='flex flex-wrap gap-2 mt-4'>
                <span className='bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full'>
                    HTML
                </span>
                
                <span className='bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full'>
                    CSS
                </span>

                <span className='bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full'>
                    Python
                </span>

                <span className='bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full'>
                    Django
                </span>
            </div>

            <div className='flex space-x-4 pt-5'>
            <a href="#" className='px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-800 transition duration-300'>
              View Demo
            </a>

            <a href="https://github.com/Snehal-londhe111/django_book_crud_project" className='px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition duration-300'>
              Project Code
            </a>

                
            </div>
        </div>
        
    </div>
  )
}

export default ProjectCard1