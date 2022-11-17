
// import styles from '../styles/Layout.module.css';

import Notify from "../components/Notify";


export default function Layout( { children }){
    return (
        <>
            <Notify/>
            {children}
        </>
    )
}