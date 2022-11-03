import React from 'react'
import Logo from "../assets/logo512.png"
import './component-styles/mainpage.css'
import Download from './sub-components/Download';
import { Link } from 'react-router-dom';

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
                    {/* <div className="col-sm-2"></div> */}
                    <div className="col-sm-5 ">
                        <div className="card ">
                            <center><img src={Logo} alt="LOGO" id='logo-mainpage' className="card-img-top" /></center>
                            <div className="card-body">
                                <div className="card-title "><small>Click Here to Upload or Download</small></div>
                                <Link className='btn btn-outline-dark my-1' to="/sub-components/Upload" style={outline_button_style}>Upload</Link>
                                <Link className='btn btn-outline-dark my-1' to="/sub-components/Download"  style={outline_button_style}>Download</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        {/* <img id='logo-mainpage' src={Logo} alt="Logo" /> */}
                        
                    <p className="paragraph">
                    <hr/> 
                        <span ><center>For Uploading Files</center><hr /></span>
                        <hr/>  
                        <span ><center>For Downloading Files</center><hr /></span>
                    </p>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default MainPage
