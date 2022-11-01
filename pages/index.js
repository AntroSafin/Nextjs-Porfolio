import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {SiStreamlit,SiNetlify} from 'react-icons/si' 
import {AiFillLinkedin,AiFillInstagram,AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import Profile from "../public/Profile.png"
import { useState } from 'react'



export default function Home() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={darkMode?"dark":""}>
      <Head>
        <title>Antro Safin</title>
        <meta name="description" content="Generated by create next app" />
        <link  rel="shortcut icon" href="favicon.png" />
      </Head>

      <main className='bg-zinc-200 px-2 pb-1 mx-auto md:px-10 lg:px-20 dark:bg-gray-900'>
        {/* Section 1 */}
        <section className='min-h-screen font-burtons'>

          {/* Navigations */}
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl dark:text-white'>
              Antro 
            </h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl dark:text-white'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://drive.google.com/file/d/1d-FiDpasYcNEtGviFNJYgsF2IHVrqfqa">Resume</a>
              </li>
            </ul>
          </nav>
          {/* Navigations */}

          {/* Profile */}
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden'>
            <Image src={Profile} layout="fill" objectFit='cover' />
          </div>
          {/* Profile */}

          {/* About */}
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Antro Safin</h2>
            <h3 className='text-2xl py-2 font-medium dark:text-white'>Software Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-zinc-300'>I am currently pursuing my graduation in B.Tech Information Technology.</p>
          </div>
          {/* About */}

          {/* Social Links */}
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-zinc-300'>
            <a href="https://www.linkedin.com/in/antro-safin-m"><AiFillLinkedin /></a>
            <a href='https://github.com/AntroSafin'><AiFillGithub /></a>
            <a href='https://www.instagram.com/antro_safin'><AiFillInstagram /></a>
          </div>
          {/* Social Links */}

        </section>
        {/* Section 1 */}

        <div className='h-1 bg-gradient-to-l from-teal-500 my-10'></div>

        {/* Section 2 */}
        <section>
          <div className='text-center p-10 font-burtons'>
            <h3 className='text-4xl font-medium dark:text-white'>Projects</h3>
          </div>

          <div class="font-cascadia p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div class="rounded-xl overflow-hidden shadow-xl shadow-teal-600/60 dark:bg-slate-100">
            <picture>
              <img class="w-full" src="/project-1.png" alt="Fire_image"/>
            </picture>
            <div class="px-6 py-4">
              <div class="p-2 text-lg text-center"><a href='https://github.com/AntroSafin/Fire_Detection_YoloV5' className='bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-full'>Fire Detection</a></div>
              <div class="text-gray-700 p-3 leading-7 justify-center max-w-lg mx-auto">
                <ul class="list-disc">
                  <li>
                    In this project I created my own dataset with 300 images and labels.
                  </li>
                  <br/>
                  <li>
                    Trained the model with my dataset and used custom weights in the project.
                  </li>
                  <br/>
                  <li>
                    Created the streamlit app with image,video and live detection options.
                  </li>
                  <br/>
                  <li>
                    Used Pytorch hub for loading my custom weights.
                  </li>
                </ul>
              </div>
              <div className='text-5xl py-3 flex justify-center text-teal-600'><a href="https://firedetection.streamlitapp.com/"><SiStreamlit /></a></div>
            </div>
            <div class="px-6 pt-4 pb-2 max-w-lg text-center mx-auto">
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Streamlit</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Opencv</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pytorch</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">YoloV5</span>
            </div>
          </div>

          {/* Card 2 */}
          <div class="rounded-xl overflow-hidden shadow-xl shadow-teal-600/60 dark:bg-slate-100">
            <picture>
            <img class="w-full" src="/project-3.jpg" alt="Portfolio"/>
            </picture>
            <div class="px-6 py-4">
              <div class="p-2 text-lg text-center"><a href='https://github.com/AntroSafin/Nextjs-Porfolio' className='bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-full'>Portfolio</a></div>
              <div class="text-gray-700 p-3 leading-7 justify-center max-w-lg mx-auto">
                <ul class="list-disc">
                  <li>
                    Learned about Nextjs and Tailwind css.
                  </li>
                  <br/>
                  <li>
                    Created my own responsive Portfolio website.
                  </li>
                </ul>
              </div>
              <div className='text-5xl py-3 flex justify-center text-teal-600'><a href="https://antrosafin.netlify.app/"><SiNetlify /></a></div>
            </div>
            <div class="px-6 pt-4 pb-2 text-center max-w-lg mx-auto">
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Nextjs</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind Css</span>
            </div>
          </div>

          {/* Card 3 */}
          <div class="rounded-xl overflow-hidden shadow-xl shadow-teal-600/60 dark:bg-slate-100">
            <picture>
            <img class="w-full" src="/project-2.jpg" alt="ChatBot"/>
            </picture>
            <div class="px-6 py-4">
              <div class="p-2 text-lg text-center"><a href='https://github.com/AntroSafin/ChatBot' className='bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-full'>ChatBot</a></div>
              <div class="text-gray-700 p-3 leading-7 justify-center max-w-lg mx-auto">
                <ul class="list-disc">
                  <li>
                    A simple chatbot for banking FAQ answers.
                  </li>
                  <br/>
                  <li>
                    We used AIML which is an extension of XML for this project.
                  </li>
                  <br/>
                  <li>
                    Our team won the first prize in our usecase in Internal Hackathon conducted by our college.
                  </li>
                </ul>
              </div>
            </div>
            <div class="px-6 pt-4 pb-2 text-center max-w-lg mx-auto">
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">AIML</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Java</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Html</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Css</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JSP</span>
            </div>
          </div>

          {/* Card 4 */}
          <div class="rounded-xl overflow-hidden shadow-xl shadow-teal-600/60 dark:bg-slate-100">
            <picture>
            <img class="w-full" src="/project-4.png" alt="Giphy"/>
            </picture>
            <div class="px-6 py-4">
              <div class="p-2 text-lg text-center"><a href='https://github.com/AntroSafin/GiphySearch' className='bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-full'>GiphySearch</a></div>
              <div class="text-gray-700 p-3 leading-7 justify-center max-w-lg mx-auto">
                <ul class="list-disc">
                  <li>
                    A simple website which search for gif images.
                  </li>
                  <br/>
                  <li>
                    I used Giphy API for getting gif images from the Giphy Site.
                  </li>
                </ul>
              </div>
              <div className='text-5xl py-3 flex justify-center text-teal-600'><a href="https://simplegiphy.netlify.app/"><SiNetlify /></a></div>
            </div>
            <div class="px-6 pt-4 pb-2 text-center max-w-lg mx-auto">
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Html</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Css</span>
              <span class="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
            </div>
          </div>
        </div>
        </section>
        {/* Section 2 */}
      </main>
    </div>
  )
}
