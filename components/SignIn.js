import { useFormik } from 'formik';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import login_validate from '../lib/validate';
import { DataContext } from '../store/GlobalState';
import styles from '../styles/Form.module.css';
const baseUrl = process.env.NEXTAUTH_URL





export default function SignIn(){

    const [show, setShow] = useState(false)
    const router = useRouter()

    const [dispatch] = useContext(DataContext)
    // formik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate : login_validate,
        onSubmit
    })

    /**
     * haleykennedy@gmail.com
     * admin123
     */

    async function onSubmit(values){
        
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: baseUrl
        })

        // if(status.ok) return  dispatch({ type: 'NOTIFY', payload: {loading: true}})


        if(status.ok) router.push(status.url)
        
    }

    // Google Handler function
    async function handleGoogleSignin(){
        signIn('google', { callbackUrl : `${baseUrl}`})
    }

    // Github Login 
    async function handleGithubSignin(){
        signIn('github', { callbackUrl : `${baseUrl}`})
    }

    return (
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-3xl text-center font-bold py-4'>Sign in</h1>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>

                <div className="input-button flex justify-center">
                    <button type='button'  onClick={handleGoogleSignin} className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-800">
                    <FaGoogle className="text-sm" />
                    </button>
                </div>

                <p className="text-gray-400 my-3 text-center ">or use your email account</p>
                
                <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    {...formik.getFieldProps('email')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                   
                </div>
                {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}

                <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-800' : ''}`}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    {...formik.getFieldProps('password')}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                   
                </div>

                {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}
                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className="border-2 border-green-800 rounded-full px-12 py-2 inline-block font-bold bg-white text-green-800 hover:bg-green-800 hover:text-white">
                        Login
                    </button>
                </div>
                
                {/* <div className="input-button">
                    <button type='button' onClick={handleGithubSignin} className={styles.button_custom}>
                        Sign In with Github <Image src={'/assets/github.svg'} width={25} height={25}></Image>
                    </button>
                </div> */}
            </form>
        </section>
    )
}