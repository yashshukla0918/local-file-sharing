import '../component-styles/common.css'
import axios from 'axios';

import React, { useState } from 'react'
import ImageTile from './ImageTile';

const Upload = () => {

  const [chosenFiles, setChosenFiles] = useState([]);
  const handleFile = (event) => {
    setChosenFiles(Array.prototype.slice.call(event.target.files));
  }


  const FileUpload =()=>{
    const formData = new FormData();
    for(let i=0 ; i<chosenFiles.length;i++){
      formData.append('image'+i.toString(),chosenFiles[i],chosenFiles[i].name)
    }

  axios.post('../../UploadedFiles',formData).then(response =>{
    console.log(response);
   }).catch(error =>{
    console.log(error);
   });

  }
  
  return (
    <>
      <div className="container container-style">
        <div className="row my-5"></div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card text-center">
              <div className="card-body">
                <div className="card-title"><h4>Chose files to upload</h4></div>
                <div className='my-2'>
                  <label htmlFor="formFileMultiple" className='form-label'></label>
                  <input type="file" multiple className='form-control' name="" id="formFileMultiple" onChange={handleFile} />
                </div>
                <small>You can select multiple file here.</small><br />
                <button onClick={FileUpload} className={`btn btn-outline-success my-3 outline-button-style`}   >Upload</button>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-7">
              {chosenFiles.length >0 &&  <ImageTile  imageArray={chosenFiles}/> } 
          </div>
        </div>
      </div>
    </>
  )
}

export default Upload