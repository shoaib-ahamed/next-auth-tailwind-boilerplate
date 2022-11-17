/* eslint-disable import/no-anonymous-default-export */
import { compare } from 'bcryptjs';
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';



export default async (req, res) => {
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    switch(req.method){
        case "POST":
            await login(req, res)
            break;
    }
}

const login = async (req, res) => {
    try{
        const { email, password } = req.body

        console.log(email, password)
        
        const user = await Users.findOne({ email })
        if(!user) return res.status(400).json({err: 'This user does not exist.'})

        const isMatch = await compare(password, user.password)
        if(!isMatch) return res.status(400).json({err: 'Incorrect password.'})
        
        res.json({
            msg: "Login Success!",
            user: {
                name: user.username,
                email: user.email,
                phone: user.phone
            }
        })

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}