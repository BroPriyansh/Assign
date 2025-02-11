// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import bg from './header-background.webp'
import me from './me.jpg'
import React, { useState } from 'react';  
import Swal from 'sweetalert2'

function App() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });  

  // const Skills = () => {  
    const skillCategories = [  
      {  
        title: 'Spoken languages',  
        skills: [  
          { name: 'English', level: 70 },  
          { name: 'Hindi', level: 90 },  
        ],  
      },  
      {  
        title: 'Frontend development',  
        skills: [  
          { name: 'React', level: 70 },  
          { name: 'JavaScript', level: 70 },  
          { name: 'Tailwind', level: 70 },
          { name: 'HTML', level: 80 },
          { name: 'CSS', level: 80 },  
        ],  
      },  

      {
        title: 'Programming Languages',
        skills: [
          { name: 'Python', level: 60 },
          { name: 'C', level: 60 },
          { name: 'Java', level: 70 },
        ],
      },

      {
        title: 'Tools',
        skills: [
          { name: 'Git', level: 70 },
          { name: 'VS Code', level: 90 },
          { name: 'Figma', level: 70 },
        ],
      }
    ];  
  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    console.log('Form submitted:', formData);  
    Swal.fire({  
      icon: 'success',  
      title: 'Form Submitted!',  
      text: 'Thank you for reaching out.',
    });

    // Here you can also send the form data to a server or an API.  
    setFormData({  
      name: '',  
      email: '',  
      message: '',  
    });  
  };  

  return (
    <>
    <header className="flex justify-center space-x-4 bg-gray-800 text-white p-4">
      <a href="#about" className="hover:text-orange-500 cursor-pointer hover:delay-150">About</a>
      <a href="#skills"className="hover:text-orange-500 cursor-pointer hover:delay-150">Skills</a>
      <a href="#portfolio"className="hover:text-orange-500 cursor-pointer hover:delay-150">Portfolio</a>
      {/* <p className="hover:text-orange-500 cursor-pointer hover:delay-150">Testimonials</p> */}
      <a href="#contact"className="hover:text-orange-500 cursor-pointer hover:delay-150">Contact</a>
    </header>
      {/* <h1>React App</h1> */}

    {/* <body> */}
    {/* first */}
      <section className="flex text-center justify-center items-center text-white bg-cover bg-center h-screen" style={{backgroundImage: `url(${bg})`}}> 
        <div className="text-center text-white bg-[#15364e] bg-opacity-70 p-8 rounded-lg w-[70%]">
          <h1 className='text-6xl font-bold'>I'm Priyansh Tyagi.</h1>
          <p className='my-8 text-xl'>Motivated and enthusiastic 2nd-year B.Tech Computer Science student with a strong foundation in front-end
              development. Skilled in HTML, CSS, JavaScript and, React. Proficient in Python, C, and Java, with a proven ability
              to work collaboratively and independently. Eager to leverage skills in real-world projects and contribute to the
              technology industry with innovative and user-centric solutions
          </p>
          <div className="flex justify-center space-x-8">
            <button className='border border-orange-500 rounded-full px-4 py-2 text-lg'>Resume</button>
            <button className='border border-white rounded-full px-4 py-2 text-lg'>Contact</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-700 text-white p-12 flex justify-center items-center">  
        {/* <img className="rounded-full mr-8 w-[40%]" style={{backgroundImage: `url(${me})`}}/>  */}
        
        <div className="flex justify-center items-center">    
          <img src={me} alt="Priyansh Tyagi" className="w-[10%] rounded-lg" /> 
          <div>  
            <h2 className="text-center text-3xl mb-6">About Me</h2>
            <div className="flex justify-center">
              <p className="text-center mb-2 w-[40%] ">  
                Use this bio section as your way of describing yourself and saying what you do,  
                what technologies you like to use or feel most comfortable with, describing  
                your personality, or whatever else you feel like throwing in.  
              </p>
            </div>
            <div className="flex justify-center space-x-4">  
              <ul className="list-disc ml-6">  
                <li><strong>Location:</strong> Victoria, BC</li>  
                <li><strong>Nationality:</strong> Canadian / Irish</li>  
                <li><strong>Study:</strong> University of Victoria</li>   
              </ul>  
              <ul>
                <li><strong>Age:</strong> 29</li>  
                <li><strong>Interests:</strong> Motorcycles, Muay Thai, Banjos</li>  
                <li><strong>Employment:</strong> Instant Domains, inc.</li> 
              </ul>
            </div>
          </div>  
        </div>  
      </section>

      {/* Education and Experience */}
      <section id="skills" className="bg-white text-black p-12 ">
        <div className='flex w-[70%] space-x-20 ml-[20%]'>
          <div>
            <h1 className="text-center text-3xl mb-6">Education</h1>
            <hr />
          </div>
          <div>
            <h2>Bachelor in Computer Science</h2>
            <p>GLA UNIVERSITY, MATHURA</p>
            <p>2023-27</p>
            
            <h2 className='mt-4'>Senior Secondry Education</h2>
            <p>Baluni Public School, Agra</p>
            <p>2021-23</p>
          </div>
        </div>
        <hr className='mt-8' />
        <div className='flex w-[70%] space-x-20 mt-8 ml-[20%]'>
          <div>
            <h1 className="text-center text-3xl mb-6">Experience</h1>
            <hr />
          </div>
          <div>
            <h2>Frontend Developer Intern</h2>
            <p>BAOIAM</p>
            <p>2nd June 2024 - 2nd August 2024</p>
          </div>
        </div>
        <hr className='mt-8 ' />
      </section>

      {/* Skills */}
      <section className="bg-white text-black p-12">  
      <h2 className="text-center text-3xl mb-6">Skills</h2>  

      <div className="w-[60%] mx-auto flex flex-wrap gap-x-20 gap-y-10">  
        {skillCategories.map((category, index) => (  
          <div key={index} className="flex-1 min-w-[250px] max-w-[45%] mb-8">  
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>  
            {category.skills.map((skill, idx) => (  
              <div key={idx} className="mb-2">  
                <span className="block text-gray-400">{skill.name}</span>  
                <div className="relative">  
                  <div className="bg-gray-100 rounded h-2">  
                    <div  
                      className="bg-orange-500 h-full rounded"  
                      style={{ width: `${skill.level}%` }}  
                    ></div>  
                  </div>  
                </div>  
              </div>  
            ))}  
          </div>  
        ))}  
      </div>  
    </section>  


    {/* Portfolio */}  
    <section id="portfolio" className="bg-gray-900 text-white p-12">  
      <h2 className="text-center text-3xl mb-6">Check out some of my work</h2>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">  
        <div className="relative">  
          <img src="" alt="Project Unavailable" className="w-full h-auto rounded-lg" />  
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Project title 1</div>  
        </div>  
        <div className="relative">  
          <img src="" alt="Project Unavailable" className="w-full h-auto rounded-lg" />  
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">Project title 2</div>  
        </div>
      </div>  
    </section>

    {/* Testimonials
      <section className="bg-gray-900 text-white p-12">  
        <div className="max-w-4xl mx-auto text-center">  
          <blockquote className="bg-gray-800 p-6 rounded-lg shadow-lg">  
            <p>"Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details."</p>  
            <footer className="mt-4 text-lg">-- Jane Doe</footer>  
          </blockquote>  
        </div>  
      </section> */}

      {/* Contact */}
      <section id="contact" className="bg-white text-black p-12">  
        <h2 className="text-center text-3xl mb-6">Get in touch.</h2>  
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">  
          <input  
            type="text"  
            name="name"  
            placeholder="Name"  
            value={formData.name}  
            onChange={handleChange}  
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"  
            required  
          />  
          <input  
            type="email"  
            name="email"  
            placeholder="Email"  
            value={formData.email}  
            onChange={handleChange}  
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"  
            required  
          />  
          <textarea  
            name="message"  
            placeholder="Message"  
            value={formData.message}  
            onChange={handleChange}  
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"  
            rows="5"  
            required  
          ></textarea>  
          <button type="submit" className="w-full p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md">  
            Send Message  
          </button>  
        </form>  
        <div className="mt-8 text-center">  
          {/* <p>Here is a good spot for a message to your readers to let them know how best to reach out to you.</p>   */}
          <p className="mt-2">Email: <a href="mailto:priyanshtyagi30@gmail.com" className="underline">priyanshtyagi30@gmail.com</a></p>  
          <p>Location: Agra Uttar Pradesh, India</p>  
          {/* Social Media Links */}  
          <div className="flex justify-center space-x-4 mt-4">  
            {/* <a href="https://twitter.com/tbakr" target="_blank" rel="noopener noreferrer">Twitter</a>   */}
            <a href="https://github.com/BroPriyansh" target="_blank" rel="noopener noreferrer">GitHub</a>  
            <a href="https://www.instagram.com/brop1_2/" target="_blank" rel="noopener noreferrer">Instagram</a>  
          </div>  
        </div>  
      </section>    
    {/* </body> */}
    </>
  )
}

export default App
