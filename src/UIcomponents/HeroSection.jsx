import React from 'react'
import { GoArrowDownRight } from "react-icons/go";
import { FaBook } from "react-icons/fa";
import { LuAward } from "react-icons/lu";
import { BiBriefcase } from "react-icons/bi";
import { HiCheckCircle } from "react-icons/hi";
import { BsBoxArrowInRight } from "react-icons/bs";
function HeroSection() {
  return (
    <div className='laptop-max:w-[100%] laptop-max:scrol-x-hidden' >
        <div className='w-full h-full flex laptop-max:w-auto'>
                {/* HeroSection  starts*/}
                <div className='w-[50%] h-full flex flex-col justify-center items-start p-[4rem] ml-5 mt-[200px] 
laptop-max:p-2 laptop-max:mx-auto laptop-max:w-[90%] laptop-max:items-center '>
 
                    {/* heading div */}
                    <h1 className='text-5xl  font-bold laptop-max:text-center '>Looking for</h1>
                    <h1 className='text-5xl font-bold laptop-max:text-center '>dream internship?</h1>
                    <p className='text-xl mt-5 laptop-max:text-center'>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities.</p>
                    <div className='w-full flex justify-start gap-4 items-center mt-5 laptop-max:justify-center'>
                        {/* Buttons */}
                    <button type="button" className=' transition-all duration-300 bg-[#43A724] text-white px-8 py-2 rounded-lg hover:bg-[#35851c] border border-[#43A724]'>
                      Our Job Portal
                </button>
                    <button
                className=' flex justify-center items-center gap-2 transition-all duration-300 bg-black text-white px-8 py-2 rounded-lg hover:bg-[#353635] hover:text-white border border-black'>
                    Dashboard <GoArrowDownRight className='text-2xl'/>
                </button>
                </div>
                </div >
                <div className='w-[50%] h-full flex justify-center items-center p-[2rem] ml-2 laptop-max:hidden mt-[100px] '>
                    {/* image div */}
                    <img className='h-[500px] w-[600px] ' src="/main.png" alt="hero" />
                </div>

        </div>
        {/* Home page main section is complete..! */}

        <div className='w-full h-full mt-44 laptop-max:w-[100%] laptop-max:mx-auto'>
            {/* Partners section */}
            <div className='mx-auto'>
                <p className='text-center'>Collaborated with Trusted Worldwide Partners</p>
                <div className='w-full h-full flex justify-center items-center gap-20 mt-5 flex-wrap'>
                    <img className='h-[60px] w-[60px] hover:scale-105' src="/cloud.png" alt="partner" />
                    <img className='h-[60px] w-[60px] hover:scale-105' src="/pakistan.png" alt="partner" />
                    <img className='h-[60px] w-[60px] hover:scale-105' src="/founders.png" alt="partner" />
                    <img className='h-[60px] w-[60px] hover:scale-105' src="/itg.png" alt="partner" />
                    <img className='h-[60px] w-[60px] hover:scale-105' src="/nics.png" alt="partner" />
                    <img className='h-[60px] w-[60px] hover:scale-105' src="/pitb.png" alt="partner" />
                    
                </div>    
            </div>

        </div>
        {/* Partners section is complete..! */}

        <div className='w-full h-full mt-44 laptop-max:w-[100%]  laptop-max:mx-auto'>
            {/* third section */}
            <div className=' h-full flex justify-start items-start ml-20 laptop-max:flex-col laptop-max:mx-auto'>
                {/* image */}
                <div className='laptop-max:mx-auto' >
                    <img className='h-[600px] w-[480px] ' src="/homeImage.png" alt="hero" />
                </div>
                {/* other section */}
                <div className='w-[50%] h-full ml-20 laptop-max:mx-auto laptop-max:w-[90%] laptop-max:mt-10'>
                    <p className='bg-[#F3F4F6] p-1 font-bold text-[10px] rounded-lg text-center w-[100px]'>About Internee.pk</p>
                    <p className='text-[2.8rem] font-bold mt-5'>Revolutionizing Career</p>
                    <p className='text-[2.8rem] font-bold'>Growth Through</p>
                    <p className='text-[2.8rem] font-bold'>Meaningful Internships</p>
                    <p className='mt-5'>We bridge the gap between talent and opportunity, helping students and fresh graduates secure valuable internships.</p>
                    <div className='w-full h-full flex justify-start items-center gap-10 mt-8'>
                        {/* badges */}
                    <div>
                        <p className='h-[70px] w-[70px] bg-[#171717] rounded-2xl flex justify-center items-center'><FaBook className='bg-black text-white text-4xl' /></p>
                        <p className='mt-4'>Gain Practical Experience & Build Industry Skills</p>
                    </div>
                    <div>
                        <p className='h-[70px] w-[70px] bg-[#171717] rounded-2xl flex justify-center items-center'><LuAward className='bg-black text-white text-4xl' /></p>
                        <p className='mt-4'>Gain Practical Experience & Build Industry Skills</p>
                    </div>
                    </div>
                    <a href='/'>
                    <button type="button" className=' transition-all duration-300 bg-[#43A724] text-white px-8 py-2 rounded-full hover:bg-[#35851c] border border-[#43A724] mt-7'>
                      Explore Internships
                </button>
                </a>
                </div>

            </div>

        </div>
        {/* third section is complete..! */}

    <div className='w-full h-[140vh] mt-44 bg-[#F3F4F6] laptop-max:h-[330vh] '>
        {/* fourth section */}
        <div className='w-full full flex justify-start items-center flex-col'>
            <p className='p-2 bg-white text-center rounded-full mt-32 '><span className='bg-black p-1 font-bold text-[13px] rounded-full text-white text-center '>Trending</span> Explore Internship Opportunities</p>
            <p className='text-5xl text-center mt-5'>Your Dream Internship is Just One</p>
            <p className='text-5xl text-center'>Click Away!</p>
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
    {/* Fourth section is complete..! */}

    <div className='w-full f-[100vh] mt-0 bg-[#001432] laptop-max:h-auto laptop-max:mt-0'>
        {/* Fifth section */}
        <div className=' h-full flex justify-start items-start p-10 laptop-max:flex-col-reverse laptop-max:mx-auto'>
                {/* other section */}
                <div className='w-[50%] h-full ml-20 laptop-max:mx-auto laptop-max:w-[90%] laptop-max:mt-10'>
                    <p className='bg-[#F3F4F6] p-2 font-bold text-[12px] rounded-full text-center w-[110px]'>Why Choose Us</p>
                    <p className='text-[2.8rem] font-bold mt-5 text-white'>Quality Internships</p>
                    <p className='text-[2.8rem] font-bold text-white'>Designed for Your</p>
                    <p className='text-[2.8rem] font-bold text-white'>Growth and Flexibility</p>
                    <p className='mt-5 text-[#7F8998]'>Gain real-world experience, develop essential skills, and build the connections needed for a successful future.</p>
                    <div className='w-full h-full flex flex-col justify-start items-center gap-10 mt-8'>
                        {/* badges */}
                    <div className='flex justify-between items-start'>
                        <p className='h-[70px] w-[70px] bg-[#43A724] rounded-2xl flex justify-center items-center'> <HiCheckCircle className='bg-[#43A724] text-white text-4xl' /></p>
                        <span className='flex flex-col justify-start items-start ml-4'>
                        <p className='text-white'>Verified Internships</p>
                        <p className='text-[#7F8998]'>Gain access to trusted opportunities from reputable companies across various industries.</p>
                        </span>
                    </div>
                    <div className='flex justify-between items-start'>
                        <p className='h-[70px] w-[70px] bg-[#43A724] rounded-2xl flex justify-center items-center'> <FaBook className='bg-[#43A724] text-white text-4xl' /></p>
                        <span className='flex flex-col justify-start items-start ml-4'>
                        <p className='text-white'>LMS for Skill Growth</p>
                        <p className='text-[#7F8998]'>Access our Learning Management System (LMS) to upskill with high-quality courses, webinars, and workshops.</p>
                        </span>
                    </div>
                    <div className='flex justify-between items-start'>
                        <p className='h-[70px] w-[70px] bg-[#43A724] rounded-2xl flex justify-center items-center'> <BiBriefcase className='bg-[#43A724] text-white text-4xl' /></p>
                        <span className='flex flex-col justify-start items-start ml-4'>
                        <p className='text-white'>Dedicated Job Portal</p>
                        <p className='text-[#7F8998]'>Explore full-time job opportunities after your internship and connect with top employers hiring fresh talent.</p>
                        </span>
                    </div>
                    </div>
                </div>
                {/* image */}
                <div className='w-[40%] flex flex-col justify-center items-center laptop-max:mx-auto laptop-max:w-full' >
                    <img className='h-[500px] w-[400px] my-auto' src="/rateimage.png" alt="hero" />
                </div>

            </div>

    </div>

        {/* Fifth section is complete..! */}

        <div className="max-w-6xl mx-auto px-5 py-16 bg-white">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left md:pt-20">
          <div className="inline-block bg-green-100 text-green-600 font-semibold text-sm px-3 py-1 rounded-full mb-4">
            How It Works
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            A Simple and Seamless Process to Start Your Internship Journey
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative">
          <div className="relative pl-10 border-l-2 border-gray-300">
            {/* Step 1 */}
            <div className="relative mb-16">
              <div className="absolute -left-[42px] top-0 w-[60px] h-[60px] bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-sm z-10">
                Step 1
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 ml-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Sign Up & Choose a Domain</h3>
                <p className="text-sm text-gray-600">
                  Explore a wide range of internships across various industries, tailored to match your skills.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-16">
              <div className="absolute -left-[42px] top-0 w-[60px] h-[60px] bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm z-10">
                Step 2
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 ml-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fill out the Desired Form</h3>
                <p className="text-sm text-gray-600">
                  Fill out a quick application form and secure your internship opportunity.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[42px] top-0 w-[60px] h-[60px] bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm z-10">
                Step 3
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 ml-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Earn Your Certificate</h3>
                <p className="text-sm text-gray-600">
                  Complete your internship, gain valuable hands-on experience, and receive a certificate.
                </p>
              </div>
            </div>
          </div>

          {/* Get Started Button */}
          <a
            href="/signin"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full mt-10 ml-16 transition-colors duration-300"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default HeroSection