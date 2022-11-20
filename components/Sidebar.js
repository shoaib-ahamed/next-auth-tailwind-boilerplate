import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'


const Sidebar = ({handleSignOut , auth, session}) => {

    const [open , setOpen] = useState(true)

    const menus = [
        { title: 'profile' , src: '' , link:'./profile' },
        { title: 'chat' , src: '' },
    ]
    

  return (
        <div className="flex w-full">
            <div className={`${open ? "w-72" : "w-24"} duration-300 h-screen bg-winterSky border border-black m-4 relative `}>
                <span className={`absolute cursor-pointer right-0 top-9 w-5 border border-black rounded-full ${!open && "rotate-180"}`} onClick={()=> setOpen(!open)}><BiArrowBack/></span>

                <ul className="pt-6">
                    {menus.map(( menu, idx ) =>(
                        <li className="text-gray-300 text-sm flex" key={idx}>
                            {menu.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full text-center">
               
                    <h5 className="text-2xl">Hello , {session.user.name}.</h5>
                    { Object.keys(auth).length === 0 ? 
                    null
                    : <h5 className="text-2xl">Phone : {auth.user.phone} </h5>}
                    <h3 className="text-xl">Welcome to Nesoi family.</h3>
                
            </div>
        </div>
  )
}

export default Sidebar