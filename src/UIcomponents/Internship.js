import React from 'react'
import { BsBoxArrowInRight } from "react-icons/bs";

function Internship() {
  return (
    <div className='h-auto mt-20 ml-4 '>
      
       <div className='w-full  flex laptop-max:w-auto laptop-max:flex-col'>
                      {/* First  starts*/}
                      <div className='w-[50%] h-full flex flex-col justify-center items-start p-[4rem]  laptop-max:p-2 laptop-max:mx-auto laptop-max:w-[90%] laptop-max:items-center '>
       
                          {/* heading div */}
                          <h1 className='text-5xl font-bold laptop-max:text-center text-[#43A724]'>Unlock Your Future</h1>
                         
                          <p className='text-xl mt-5 laptop-max:text-center'>Discover world-class internships and gain hands-on experience with top industry leaders.</p>
                          <div className='w-full flex justify-start gap-4 items-center mt-5 laptop-max:justify-center'>
                              {/* Buttons */}
                          <button type="button" className=' transition-all duration-300 bg-[#43A724] text-white px-8 py-2 font-bold rounded-lg hover:bg-[#35851c] border border-[#43A724]'>
                           Get Started
                      </button>
                          
                      </div>
                      </div >
                      <div className='w-[50%] h-full flex justify-center items-center p-[2rem] ml-2 mt-[100px] laptop-max:mt-0 laptop-max:w-[90%] laptop-max:mx-auto laptop-max:flex-col'>
                      <p className='bg-[#43A724] text-3xl border rounded-lg p-10 laptop-max:text-center '>Find Your Dream Internship Today!</p>
                          
                      </div>
      
              </div>

       <div className='w-full h-[140vh] mt-44 bg-[#F3F4F6] laptop-max:h-[330vh] '>
              {/* second section */}
              <div className='w-full full flex justify-start items-center flex-col'>
                <p className='text-5xl font-bold mt-6'>Explore Internship Categories</p>
                  <p className='text-2xl text-center mt-5 w-[75%]'>Choose from a wide range of internship opportunities and kickstart your professional journey.</p>
                  <div className='grid grid-cols-3 grid-rows-2 gap-5 mt-10 laptop-max:grid-cols-1 laptop-max:grid-rows-6 laptop-max:gap-4 '>
                     {/* card 1 */}
              <div className='w-full h-full flex justify-start gap-5 items-center mt-5'>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
              <img className="h-[17rem] w-[25rem]" src="/GD.png" alt="Design Example" />
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 mt-3">Graphic Design</h2>
              <a href="/" className="text-[#43A724]  text-xl hover:text-blue-700 flex items-center mt-4">
              <BsBoxArrowInRight className='text-2xl text-center mr-2'/> Apply Now
              </a>
              </div>
              </div>
              </div>
                  {/* card 1 end */}
      
                  {/* card 2 */}
                  <div className='w-full h-full flex justify-start gap-5 items-center mt-5'>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
              <img className="h-[17rem] w-[25rem]" src="/chatbot.png" alt="Design Example" />
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 mt-3">Chatbot Development</h2>
              <a href="/" className="text-[#43A724] text-xl hover:text-blue-700 flex items-center mt-4">
              <BsBoxArrowInRight className='text-2xl text-center mr-2'/> Apply Now
              </a>
              </div>
              </div>
              </div>
                  {/* card 2 end */}
      
                  {/* card 3 */}
                  <div className='w-[90%] h-full flex justify-start gap-5 items-center mt-5'>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
              <img className="h-[17rem] w-[25rem]" src="/other.png" alt="Design Example" />
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 mt-3">Other Intership</h2>
              <a href="/" className="text-[#43A724] text-xl hover:text-blue-700 flex items-center mt-4">
              <BsBoxArrowInRight className='text-2xl text-center mr-2'/> Apply Now
              </a>
              </div>
              </div>
              </div>
                  {/* card 3 end */}
      
                  {/* card 4 */}
                  <div className='w-[90%] h-full flex justify-start gap-5 items-center mt-5'>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
              <img className="h-[17rem] w-[25rem]" src="/frontend.png" alt="Design Example" />
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 mt-3">Frontend Internship</h2>
              <a href="/" className="text-[#43A724] text-xl hover:text-blue-700 flex items-center mt-4">
              <BsBoxArrowInRight className='text-2xl text-center mr-2'/> Apply Now
              </a>
              </div>
              </div>
              </div>
                  {/* card 4 end */}
                   {/* card 5 */}
                   <div className='w-[90%] h-full flex justify-start gap-5 items-center mt-5'>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
              <img className="h-[17rem] w-[25rem]" src="/app.png" alt="Design Example" />
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 mt-3">App Development</h2>
              <a href="/" className="text-[#43A724] text-xl hover:text-blue-700 flex items-center mt-4">
              <BsBoxArrowInRight className='text-2xl text-center mr-2'/> Apply Now
              </a>
              </div>
              </div>
              </div>
                  {/* card 5 end */}
                 
                  {/* card 6 */}
                  <div className='w-[90%] h-full flex justify-start gap-5 items-center mt-5'>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
              <img className="h-[17rem] w-[25rem]" src="/backend.png" alt="Design Example" />
              <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 mt-3">Backend Development</h2>
              <a href="/" className="text-[#43A724] text-xl hover:text-blue-700 flex items-center mt-4">
              <BsBoxArrowInRight className='text-2xl text-center mr-2'/> Apply Now
              </a>
              </div>
              </div>
              </div>
              {/* card 6 end */}
      
          </div>
              </div>
           
          </div>
    
    </div>
    
  )
}

export default Internship