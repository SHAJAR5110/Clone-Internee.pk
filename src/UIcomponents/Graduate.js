import React from 'react';


const Graduate = () => {
    return (
        <div  className='h-[120vh] mt-10 ml-4 laptop-max:h-[250vh]'>
            <div className='w-full h-[140vh] mt-20 bg-white laptop-max:h-[230vh] '>
                          {/* second section */}
                          <div className='w-full full flex justify-start items-center flex-col'>
                            <p className='text-6xl font-bold mt-6'>Graduate Programs</p>
                              <p className='text-xl text-[#a6a6a8] text-center mt-5 mb-20 w-[75%]'>Explore our comprehensive graduate programs designed to advance your career and expand your knowledge.</p>
                              <p className='text-2xl mt-10 font-bold '>Explore Categories</p>
                              <div className='grid grid-cols-3 grid-rows-2 gap-5 mt-10 laptop-max:grid-cols-1 laptop-max:grid-rows-3 laptop-max:gap-4 '>
                                 {/* card 1 */}
                          <div className='group w-full h-full flex justify-start gap-5 items-center mt-5 hover:scale-105'>
                          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                          <img alt="Health Care" class="w-full h-64 object-cover rounded-t-xl" width="800" height="400" src="https://firebasestorage.googleapis.com/v0/b/foodapp-lqii.appspot.com/o/medical-banner-with-doctor-working-laptop.jpg?alt=media&amp;token=3a95b449-3d2b-4a66-980c-52d0ff0d5422"/>
                          <div className="px-6 py-4">
                          <h2 className="font-bold text-2xl  mb-5 mt-3 text-center group-hover:text-[#43A724] ">Health Care</h2>
                          <p>Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.</p>
                          </div>
                          </div>
                          </div>
                              {/* card 1 end */}
                  
                              {/* card 2 */}
                              <div className='group w-full h-full flex justify-start gap-5 items-center mt-5 hover:scale-105'>
                          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                          <img alt="Engineering" class="w-full h-64 object-cover rounded-t-xl" width="800" height="400" src="https://firebasestorage.googleapis.com/v0/b/foodapp-lqii.appspot.com/o/studio%20photoshooot.webp?alt=media&amp;token=e1162dae-2827-458b-83b0-42b5c81c34fd"/>
                          <div className="px-6 py-4">
                          <h2 className="font-bold text-2xl mb-5 mt-3 text-center group-hover:text-[#43A724]">Engineering</h2>
                         <p>Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver’s seat of innovation. Whether it’s civil, electrical, mechanical, or software get ready to design, build, and disrupt.</p>
                          </div>
                          </div>
                          </div>
                              {/* card 2 end */}
                  
                              {/* card 3 */}
                              <div className='group w-[90%] h-full flex justify-start gap-5 items-center mt-5 hover:scale-105 '>
                          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                          <img alt="Information Technology" class="w-full h-64 object-cover rounded-t-xl" width="800" height="400" src="https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?t=st=1744116424~exp=1744120024~hmac=e2290c6d51bbac21f4c169634764167e5488fea6e81c91e05bda3b7ced293f9d&amp;w=1380"/>
                          <div className="px-6 py-4">
                          <h2 className="font-bold text-2xl group-hover:text-[#43A724] mb-5 mt-3 text-center ">Information Technology</h2>
                          <p>Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology.</p>
                          </div>
                          </div>
                          </div>
                              {/* card 3 end */}
                  
                             
                  
                      </div>
                          </div>
                       
                      </div>
        </div>
    );
}

export default Graduate;
