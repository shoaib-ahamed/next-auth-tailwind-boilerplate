
// import styles from '../styles/Layout.module.css';

import Notify from "../components/Notify";


export default function Layout( { children }){
    return (
        <>
            <Notify/>
            
            {/* <div className="flex justify-center">
                <div className="m-auto bg-slate-50 rounded-md  grid lg:grid-cols-2">
                    
                    <div className="right flex flex-col justify-evenly">
                        <div className="text-center py-10">
                            {children}
                        </div>
                    </div>
                </div>
            </div> */}

            {children}
        </>
    )
}


{/* <div className={styles.imgStyle}>
                        <div className={styles.cartoonImg}></div>
                        <div className={styles.cloud_one}></div>
                        <div className={styles.cloud_two}></div>
                    </div> */}