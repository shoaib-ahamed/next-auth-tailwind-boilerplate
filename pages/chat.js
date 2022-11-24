import React from 'react'
import ChatContainer from '../components/ChatContainer'
import Contacts from '../components/Contacts'
import { getData } from '../utils/fetchData'

const chat = ({users}) => {


  return (
    <div className="w-full flex flex-col md:flex-row h-[90vh]  items-center">
        <div className="w-full md:w-1/4 flex justify-center">
            <Contacts users={users}/>
        </div>

        <div className="w-full md:w-3/4 flex justify-center">
            <ChatContainer/>
        </div>
    </div>
  )
}


export async function getServerSideProps({}){
    
    const res = await getData('user')

    console.log(res)

  
    return {
      props: { users: res.users }
    }
  }

export default chat