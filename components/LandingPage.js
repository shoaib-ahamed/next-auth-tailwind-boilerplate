/* eslint-disable react/no-unescaped-entities */
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const bgImg = new URL('../public/colouredbg.png' , import.meta.url)


const LandingPage = () => {
    const { data: session } = useSession()
  return (
    <div className="w-full flex  ">
        {(session) ? null : 
        <div className="hidden md:flex md:flex-col gap-20 h-screen sticky top-0 w-72 px-5 bg-[#1C1C1C]">
            <div className="text-white text-3xl text-center mt-32"> Welcome to Nesoi</div>
            <div className="text-white text-xl text-center mt-10"> Home </div>
            <div className="text-white text-xl flex gap-5 items-center justify-center mt-5 border border-white rounded-2xl h-10"> <Link href="/login">Get Started </Link> <AiOutlineArrowLeft className="transform transition hover:translate-x-1.5 duration-200"/> </div>
        </div>}
       

       <div className="w-full flex flex-col items-center">
            <div className="flex justify-center items-center">
                <Image src='/Logo.png' height="600" width="700" alt="LOGO"/>
            </div>

            <div className="w-full flex flex-col md:w-3/5 p-4 gap-10  text-center">
                <div className="text-3xl font-semibold font-header">The Nesoi Brand</div>
                <div className="text-xl font-body">In 2015, we first launched "Therapy on Demand"  . Since then, our team has been continuously improving our platform and services. </div>
                <div className="text-xl font-body">Now, we are glad to announce our new lifestyle brand, Nesoi.
                </div>
                <div className="text-xl font-body">Nesoi is all about living your best life. We prioritize security, sustainability, and ethics, while helping you stay connected and healthy in the digital age. </div>
            </div>

            <div className="flex flex-col md:flex-row w-full px-24 py-8 md:px-8 gap-20 mt-10 justify-center">
            <Image src='/celebration.png' className="rounded-2xl" height="250" width="250" alt="LOGO"/>
            <Image src='/memories.png' className="rounded-2xl" height="250" width="250" alt="LOGO"/>

            <Image src='/scenario.png' className="rounded-2xl" height="250" width="250" alt="LOGO"/>

            </div>

            <div className="flex flex-col md:flex-row h-full gap-10 p-10 md:p-2 w-full text-center bg-[#FFB0E9] justify-around">
                <div className="flex flex-col  justify-center md:justify-around px-4 md:p-12">
                    <div className="text-2xl font-header">What</div>
                    <div className="text-2xl font-body">Nesoi App launch</div>
                </div>
                <div className="flex flex-col justify-center px-4 ">
                    <div className="text-2xl font-header">Where</div>
                    <div className="text-2xl font-body">Global</div>
                </div>
                <div className="flex flex-col justify-center px-4">
                    <div className="text-2xl font-header">When</div>
                    <div className="text-2xl font-body">1.1.23</div>
                </div>
            </div>

           
            
            
            <div className="flex flex-col w-full items-center relative  justify-center text-center p-10 bg-gray-500">
                <Image src="/colouredbg.png" alt="Background"  objectFit='fill' className="mix-blend-darken opacity-60 sepia-0" layout="fill"> 
                </Image>
                <div className="relative text-xl  md:text-2xl text-white font-header">Get Ready for a Better Social Experience</div>
                <div className="relative text-base md:text-xl text-white font-body">We're so excited to invite you to try Nesoi One. It will be an app worth celebrating!</div>
            </div>
        
        

            <div className="bg-[#9FCBE6] w-full  flex flex-col items-center justify-center p-8 gap-4">
                <div className="text-2xl font-header">Are you getting the best online healthcare?</div>
                <button className="border border-black w-32 h-10 rounded-lg font-body"> <Link href="/get-started">Learn More</Link> </button>
            </div>


            <div className="w-full p-4  bg-[#FFB0E9]">
                (c) 2021-2022 Nesoi ® 
            </div>
       </div>

    </div>
  )
}

export default LandingPage