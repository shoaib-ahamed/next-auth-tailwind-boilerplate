import React from 'react'

const Contacts = ({users}) => {

    

  return (
    <div>{users.map((user) => {
        <div></div>
    })}

    <div className="rounded-2xl bg-slate-400">
    {users[0].name}
    </div>
    </div>
  )
}

export default Contacts