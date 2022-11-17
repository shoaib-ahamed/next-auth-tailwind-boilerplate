import { useFormik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import Layout from '../layout/layout';
import { registerValidate } from '../lib/validate';
import { DataContext } from '../store/GlobalState';


export default function Register(){

    const [show, setShow] = useState({ password: false, cpassword: false })
    const router = useRouter()

    const [state , dispatch] = useContext(DataContext)

    const formik = useFormik({
        initialValues: {
            username : '',
            email: '',
            password: '',
            cpassword: '',
            phone: ''
        },
        validate: registerValidate,
        onSubmit
    })

    async function onSubmit(values){

        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        const res = await fetch('http://localhost:3000/api/auth/signup', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000')
            }) 
            
            
        if(res.err) return dispatch({ type: 'NOTIFY' ,  payload: {error: res.err } }) 
    

         
        
        

    }

    return (
        <Layout>


        <Head>
            <title>Register</title>
        </Head>

        <section className='w-3/4 md:w-2/4 lg:w-1/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl text-center font-bold py-4'>Register</h1>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={`flex position:relative ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
                    <input 
                    type="text"
                    name='Username'
                    placeholder='Username'
                    className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                    {...formik.getFieldProps('username')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiOutlineUser size={25} />
                    </span>
                </div>
                {/* {formik.errors.username && formik.touched.username ? <span className='text-rose-500'>{formik.errors.username}</span> : <></>} */}
                <div className={`flex position:relative ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                    {...formik.getFieldProps('email')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                </div>
                {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}
                <div className={`flex position:relative ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                    <input 
                    type={`${show.password ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                    {...formik.getFieldProps('password')}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password})}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>
                {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}

                <div className={`flex position:relative ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
                    <input 
                    type={`${show.cpassword ? "text" : "password"}`}
                    name='cpassword'
                    placeholder='Confirm Password'
                    className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                    {...formik.getFieldProps('cpassword')}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, cpassword: !show.cpassword})}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>
                <div className={`flex position:relative ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
                    <input 
                    type="text"
                    name='phone'
                    placeholder='Phone No.'
                    className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                    {...formik.getFieldProps('phone')}
                    />
                </div>
                {/* {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>} */}

                {/* login buttons */}
                <div className="flex justify-center">
                    <button type='submit' className="w-2/3 rounded-md py-3 text-jet bg-winterSky text-lg">
                        Sign Up
                    </button>
                </div>
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                Have an account? <Link href={'/login'}><a className='text-winterSky'>Sign In</a></Link>
            </p>
        </section>
        </Layout>
    )
}