import React from 'react'
import Logo from "../assets/logo512.png"
import './component-styles/mainpage.css'
const MainPage = () => {
    let outline_button_style = {
        width  : "100%"
    }
    return (
        <>
            <div className="container">
                <div className="row row-empty text-center">
                    <p className="bg-dark text-light text-center p-4 my-4 main-para">
                       <center > Welcome to Local File Sharing App</center>
                    </p>
                </div>
                <div className="row text-center my-3">
                    <div className="col"></div>
                    <div className="col-sm-5 ">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Welcome to LFS</div>
                                <button className='btn btn-outline-dark my-1' style={outline_button_style}>Upload</button>
                                <button className='btn btn-outline-dark my-1'  style={outline_button_style}>Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <img id='logo-mainpage' src={Logo} alt="Logo" />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    )
}

export default MainPage
