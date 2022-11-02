import { useContext } from 'react';
import { DataContext } from '../store/GlobalState';


const Toast = ({msg, handleShow, bgColor}) => {

    const [ state , dispatch] = useContext(DataContext)

    const { auth } = state

    const {user} = auth

    return(
        <div className="flex justify-end">
            {/* <div className={`toast show position-fixed text-light ${bgColor}`}
        style={{ top: '5px', right: '5px', zIndex: 9, minWidth: '280px' }} >

            <div className={`toast-header ${bgColor} text-light`}>
                <strong className="mr-auto text-light">{msg.title}</strong>

                <button type="button" className="ml-2 mb-1 close text-light" 
                data-dismiss="toast" style={{ outline: 'none'}} 
                onClick={handleShow}>x</button>
            </div>

            <div className="toast-body">{msg.msg}</div>

        </div> */}

<div id="toast-message-cta" className="p-2 w-full max-w-xs text-white  rounded-lg shadow  bg-green-800 " role="alert">
    <div className="flex">
        {/* <img className="w-8 h-8 rounded-full shadow-lg" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/> */}
        <div className="ml-3 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white"></span>
            <div className="mb-2 text-sm font-normal">{msg.title}</div> 
            <div className="inline-flex w-full px-2.5 py-1.5 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300">{msg.msg}</div>   
        </div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close" onClick={handleShow}>
            <span className="sr-only" >Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>
</div>
        </div>
    )
}

export default Toast