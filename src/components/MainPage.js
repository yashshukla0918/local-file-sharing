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
                    {/* <div className="col-sm-2"></div> */}
                    <div className="col-sm-5 ">
                        <div className="card ">
                            <center><img src={Logo} alt="LOGO" id='logo-mainpage' className="card-img-top" /></center>
                            <div className="card-body">
                                <div className="card-title "><small>Click Here to Upload or Download</small></div>
                                <button className='btn btn-outline-dark my-1' style={outline_button_style}>Upload</button>
                                <button className='btn btn-outline-dark my-1'  style={outline_button_style}>Download</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        {/* <img id='logo-mainpage' src={Logo} alt="Logo" /> */}
                        
                    <p className="paragraph">
                    Double quotes is a full service advertising agency located in Mumbai!!
                    The agency has a passion for creating beautiful experiences for the client. We understand the
                    client’s requirement and provide complete solutions, right from conceptualisation to execution!!!
                    We opened our doors back in 2015, For more than 5 years we have produced effective and relevant
                    solutions that let our clients engage with their targeted audiences and generating tangible results.
                    From then there was no looking back, we have grown over the time. We are bold, progressive, honest
                    and future focused and have a passion for creating designs that change the way people interact with
                    brands for the better. From building new brands to re-branding old ones, we bring creativity to life
                    and make every story count. 
                    </p>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default MainPage
