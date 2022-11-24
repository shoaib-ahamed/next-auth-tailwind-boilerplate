/* eslint-disable import/no-anonymous-default-export */
import connectMongo from '../../../database/conn';
import Users from '../../../model/UserSchema';




export default async (req, res) => {
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    switch(req.method){
        case "GET":
            await getAllUsers(req, res)
            break;
    }
}

const getAllUsers = async (req, res) => {
    try{
        
        const users = await Users.find()
        if(!users) return res.status(400).json({err: 'There is no user'})
        
        res.json({users})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}