import { motion } from 'framer-motion'
import React from 'react'
import { FaReact, FaDatabase, FaCode, FaTools, FaServer } from 'react-icons/fa'


const Skills = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }}
        id='skills'
        className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>My 
                    <span className='text-purple-600'>Skills</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Technologies I work with to bring ideas to life</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>

                    {/* Frontend  */}
                    <div className='bg-[#1a1a1a] p-8 rounded-2xl hover:scale-105 transition'>
                        <FaReact className='text-purple-500 text-4xl mb-4' />
                        <h3 className='text-xl font-semibold mb-3'>Frontend Development</h3>
                        <p className='text-gray-400 mb-4'>Building responsive and interactive user interfaces with modern frameworks.</p>

                        <div className='flex flex-wrap gap-2'>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>React</span>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>JavaScript</span>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>CSS</span>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>HTML</span>

                        </div>
                    </div>

                    {/* Backend */}
                    <div className='bg-[#1a1a1a] p-8 rounded-2xl hover:scale-105 transition'>
                        <FaServer className='text-purple-500 text-4xl mb-4' />
                        <h3 className='text-xl font-semibold mb-3'>Backend Development</h3>
                        <p className='text-gray-400 mb-4'>Creating robust server-side applications and RESTful APIs.</p>

                        <div className='flex flex-wrap gap-2'>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>Django</span>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>Flask</span>
                           
                        </div>
                    </div>

                    {/* Database */}                     
                    <div className='bg-[#1a1a1a] p-8 rounded-2xl hover:scale-105 transition'>
                        <FaDatabase className='text-purple-500 text-4xl mb-4' />
                        <h3 className='text-xl font-semibold mb-3'>Database Management</h3>
                        <p className='text-gray-400 mb-4'>Designing and optimizing databases for performance and scalability.</p>

                        <div className='flex flex-wrap gap-2'>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>MySQL</span>
                            
                        </div>
                    </div>

                    {/* Programming Language */}
                    <div className='bg-[#1a1a1a] p-8 rounded-2xl hover:scale-105 transition'>
                        <FaCode className='text-purple-500 text-4xl mb-4' />
                        <h3 className='text-xl font-semibold mb-3'>Programming Language</h3>
                        <p className='text-gray-400 mb-4'>Languages used to build software and applications.</p>

                        <div className='flex flex-wrap gap-2'>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>Python</span>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>JavaScript</span>
                        </div>
                    </div>

                    {/* Tools and technologies */}                    
                    <div className='bg-[#1a1a1a] p-8 rounded-2xl hover:scale-105 transition'>
                        <FaTools className='text-purple-500 text-4xl mb-4' />
                        <h3 className='text-xl font-semibold mb-3'>Tools & Technologies</h3>
                        <p className='text-gray-400 mb-4'>Tools used for development, version control and deployment.</p>

                        <div className='flex flex-wrap gap-2'>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>Git & GitHub</span>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>VS Code</span>
                            <span className='bg-gray-800 px-3 py-1 rounded-full text-sm'>Postman</span>
                            

                        </div>
                    </div>
                </div>
            </div>
    </motion.div>
  )
}

export default Skills