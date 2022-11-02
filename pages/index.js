import { getSession, signOut, useSession } from "next-auth/react"
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from "../components/Sidebar"
import styles from '../styles/Home.module.css'

export default function Home() {

  const { data: session } = useSession()

  function handleSignOut(){
    signOut()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}

// Guest
function Guest(){
  return (
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Guest Homepage</h3>

          <div className='flex justify-center'>
            <Link href={'/login'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</a></Link>
          </div>
      </main>
  )
}

// Authorize User
function User({ session, handleSignOut }){
  return(
    <>
    <main className="container flex gap-10">
          <div>
            <Sidebar handleSignOut={handleSignOut}/>
          </div>
          <div>
            <h5 className="text-2xl">Hello , {session.user.name}.</h5>
            <h3 className="text-xl">Welcome to Nesoi family.</h3>
          </div>
      </main>
    </>
  )
}


export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  if(!session){
    return {
      redirect : {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}