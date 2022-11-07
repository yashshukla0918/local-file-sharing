import React from 'react'
import Logo from "../assets/logo512.png"
import './component-styles/mainpage.css'
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';

const MainPage = () => {
    let outline_button_style = {
        width: "100%"
    }
    return (
        <>
            <div className="container">
                <div className="row row-empty text-center"><center >
                    <p className="bg-dark text-light text-center p-4 my-4 main-para">
                         Welcome to Local File Sharing App
                    </p></center>
                </div>
                <div className="row text-center my-3">
                    {/* <div className="col-sm-2"></div> */}
                    <div className="col-sm-5 ">
                        <div className="card ">
                            <center><img src={Logo} alt="LOGO" id='logo-mainpage' className="card-img-top" /></center>
                            <div className="card-body">
                                <div className="card-title "><small>Click Here to Upload or Download</small></div>
                                <Link className='btn btn-outline-dark my-1' to="/sub-components/Upload" style={outline_button_style}>Upload</Link>
                                <Link className='btn btn-outline-dark my-1' to="/sub-components/Download" style={outline_button_style}>Download</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        {/* <img id='logo-mainpage' src={Logo} alt="Logo" /> */}

                        <div className="paragraph row">
                            <Routes>
                                <Route path='/AboutUs' element={<AboutUs/>} />
                            </Routes>
                            <h3 className='border-bottom border-top p-3 border-dark text-center m-4' >For Uploading Files</h3>
                             <span className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur perferendis in tenetur explicabo dolorum iste nesciunt officia nihil quos dicta expedita nisi vitae quam minus, unde id beatae. Consectetur.</span>
                            <h3 className='border-bottom border-top p-3 border-dark text-center my-4'>For Downloading Files</h3> 
                            <span className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur perferendis in tenetur explicabo dolorum iste nesciunt officia nihil quos dicta expedita nisi vitae quam minus, unde id beatae. Consectetur.</span> 
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default MainPage
