import React from "react"
import logo1 from "./pic/f_logo.png"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='conatiner text-center top'>
                    <h1>Note: The website is still under process and are being updated regularly.</h1>
                    <h1>For better experience view it in desktops.</h1>
                    <div className='img'>
                        <img src={logo1} alt='' />
                    </div>
                    <p>© 2021. All rights reserved by Shivshankar-Themes.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer