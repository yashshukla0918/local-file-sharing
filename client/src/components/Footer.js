import React from 'react'
import logo from '../assets/favicon.ico'
const Footer = () => {
    let footerStyle = {
        width: "100%",
    }
    return (
        <>
            <footer className='bg-light text-dark' style={footerStyle}>
                <p className="text-center p-5 m-2">
                    Copyright &copy; Local File Sharing App <img className='m-3' src={logo} alt="" />
                </p>
            </footer>
        </>
    )
}

export default Footer