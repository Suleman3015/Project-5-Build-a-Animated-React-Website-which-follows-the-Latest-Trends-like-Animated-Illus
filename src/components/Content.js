import React from 'react'
import pic from '../images/content1.png'
import "./content.css"

export default function Content() {
    return (
        <div className="container">
          <section class="text-gray-700 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-6xl mb-4 font-medium text-gray-900">Reactjs Animation 
                <br class="hidden lg:inline-block"/> 
              </h1>
              <p class="mb-8 leading-relaxed">React-animations — the library is built on all animations with animate. css. It is easy to use and has a lot of animation collections. React-animation works with any inline style library that supports the use of objects to define keyframe animations,</p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pic">
              <img class="object-cover object-center rounded" alt="hero" src={pic}/>
            </div>
          </div>
        </section>
        </div>
    )
}
