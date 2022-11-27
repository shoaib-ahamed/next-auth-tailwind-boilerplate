/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from 'next-auth/react'
import React from 'react'


const getStarted = () => {

  const { data: session } = useSession()


  if(session) {
    return (
      <div className="h-[90vh] w-full flex flex-col items-center">
        <div className="text-3xl py-5">Are You Getting the Best Online Healthcare?</div>


          <form>
            <div className="mb-6">
              <label  className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
            </div>
            <div className="mb-6">
              <label  className="block mb-2 text-sm font-medium text-gray-900">Your Full Name</label>
              <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
            </div>
            <div className="mb-6">
              <label  className="block mb-2 text-sm font-medium text-gray-900">How Old Are You?</label>
              <select id="Age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Under 30</option>
                <option>30-39</option>
                <option>40-49</option>
                <option>50-59</option>
                <option>over 60</option>
              </select>
            </div>
            <div className="mb-6">
              <label  className="block mb-2 text-sm font-medium text-gray-900">What is you Gender?</label>
              <select id="Gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            {/* <div className="mb-6">
              <label  className="block mb-2 text-sm font-medium text-gray-900">How Old Are You?</label>
              <select id="Age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Under 30</option>
                <option>30-39</option>
                <option>40-49</option>
                <option>50-59</option>
                <option>over 60</option>
              </select>
            </div> */}
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
          </form>

      </div>
    )
  }else return (<div className="flex w-full h-[90vh] justify-center items-center">Back to Home Page</div>)
}

export default getStarted