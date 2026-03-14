import { easeOut, motion } from 'framer-motion'
import React from 'react'
import profileImg from '../assets/profileImg.jpeg';
import { FaLightbulb, FaPaintBrush, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200'
    >
      <div className="container mx-0 px-6">
        {/* heading */}
        <h2 className="text-3xl font-bold text-center">
          About
          <span className="text-purple-500"> Me</span>
        </h2>
        <p className='text-grey-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and </p>

        {/* image and my journey */}
        <div className='flex flex-col md:flex-row items-center gap-12'>
          {/* images */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='w-full h-full object-cover'
              src={profileImg} alt="Profile" />
          </div>

          {/* text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'
          >
            <div className='rounded-2xl p-8'>
              <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
              <p className='text-gray-300 mb-6'>I'm a passionate student with a strong interest in becoming a Python Full Stack Developer. I enjoy learning new technologies and building web applications. I am currently improving my skills in both frontend and backend development.</p>

              <p className='text-gray-300 mb-6'>My journey in technology started as student with a curiosity about how websites and applications work. Over time, I developed a strong interest in programming and began learning Python and web development.</p>

              {/* Cards */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <div className="bg-gray-700 p-6 rounded-xl">
                  <FaLightbulb className="text-purple-500 text-2xl mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Innovative</h3>
                  <p className="text-gray-400">
                    I have creating unique solutions to complex problemswith cutting-edge technologies.
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-xl">
                  <FaPaintBrush className="text-purple-500 text-2xl mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Design Oriented</h3>
                  <p className="text-gray-400">
                    Beautiful design and user experience are at the heart of everything I create.
                  </p>
                </div>

                <div className="bg-gray-700 p-6 rounded-xl">
                  <FaCode className="text-purple-500 text-2xl mb-3" />
                  <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
                  <p className="text-gray-400">
                    I write maintainable, efficient code following best practices and modern patterns.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About