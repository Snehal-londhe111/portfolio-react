import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaGithub, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa6'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id="contact"
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    Get In
                    <span className='text-purple-500'>Touch</span>
                </h2>

                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                    Have a project in mind or want to collaborate? let's talk!
                </p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/* Contact form */}
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none text-white'
                                    type="text" />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                                <input 
                                className='w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none text-white'
                                    type="email" />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea
                                className='w-full h-40 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none text-white'
                                    type="email" />
                            </div>

                            <button type="submit" className='w-full px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-800 transition duration-300 cursor-pointer'>
                                send
                            </button>
                        </form>
                    </div>

                    {/* Contact information */}
                    <div className='space-y-8 '>
                        <div className='flex items-start'>
                            <div className='text-purple-500 text-2xl mr-4 '>
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Maharashtra,Dharashiv </p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple-500 text-2xl mr-4 '>
                                <FaEnvelope />
                            </div>

                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>snehal@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple-500 text-2xl mr-4 '>
                                <FaPhone />
                            </div>

                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+91 2312897634</p>
                            </div>
                        </div>

                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com/Snehal-londhe111" className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300'
                                >
                                        <FaGithub />
                                </a>

                                 <a href="https://www.linkedin.com/in/snehal-londhe-55198b3aa" className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-bule-500 hover:bg-blue-500 hover:text-white transition duration-300'
                                >
                                        <FaLinkedin />
                                </a>

                                 <a href="#" className='w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300'
                                >
                                        <FaInstagram />
                                </a>

                            
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default Contact