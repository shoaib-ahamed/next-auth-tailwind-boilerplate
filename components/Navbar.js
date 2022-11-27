// import { FiMoon, FiSun } from ' react-icons/fi';
import Cookie from 'js-cookie';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { VscSignOut } from 'react-icons/vsc';
import { DataContext } from '../store/GlobalState';



const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [mounted , setMounted] = useState(false);

    const [state , dispatch] = useContext(DataContext)


    const { data: session } = useSession()



    useEffect(() => {
      setMounted(true)
    },[])

    const handleLogout = () => {
      Cookie.remove('refreshtoken' , {path: 'api/auth/accessToken'})
      localStorage.removeItem('firstLogin')
      signOut()
      dispatch({ type: 'AUTH' , payload: {}})
      dispatch({ type: 'NOTIFY' ,  payload: {success: 'Logged out!'}})
  }

    // const {systemTheme , theme , setTheme} = useTheme()


    // const RenderThemeChanger = () => {
    //   if(!mounted) return null;
    //   const currentTheme = theme === 'system' ? systemTheme : theme;

    //   if (currentTheme === 'dark'){
    //     return (
    //       <div onClick={setTheme('light')}>dark</div>
    //     )
    //   }else {
    //     return (
    //       <div onClick={setTheme('dark')}>light</div>
    //     )
    //   }
    // }
    
  return (
    <div className="flex items-center justify-between border-b border-green-800 py-6 px-20">
      <Link href="/"><a className="text-3xl"> <Image src='/Logo.png' height="50" width="50" alt="LOGO"/></a></Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
          <HiMenu className="text-4xl"/>

          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8" 
              onClick={() => setIsNavOpen(false)}
            >
              <HiMenu className="text-3xl"/>
            </div>
            <ul className="flex flex-col items-center justify-center gap-6 min-h-screen">
            {(session) ? 
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              :
              <li>
                <a href="/about">About</a>
              </li>
              }
              <li className="border-b border-green-800 my-2 uppercase">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="border-b border-green-800 my-2 uppercase">
                <a href="/contact">Contact</a>
              </li>
              {(session) ? <li> <button onClick={handleLogout} className="bg-green-800 text-white px-5 py-3"><VscSignOut/></button>
              </li> : <></>}
              {/* <li>
                <RenderThemeChanger/>
              </li> */}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 items-center justify-center lg:flex">
          {(session) ? 
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          :
          <li>
            <a href="/about">About</a>
          </li>
          }
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {(session) ? <li> <button onClick={handleLogout} className="bg-green-800 text-white px-5 py-3"><VscSignOut/></button>
              </li> : <></>}
          {/* <li>
            <RenderThemeChanger/>
          </li> */}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 30%;
        height: 100vh;
        top: 0;
        right: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>

  )
}

export default Navbar