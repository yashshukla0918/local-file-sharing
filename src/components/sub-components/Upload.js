import '../component-styles/common.css'
import React from 'react'

const Upload = () => {
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
                <input type="file" className='form-control' name="" id="formFileMultiple" />
              </div>
              <small>You can select multiple file here.</small><br/>
             <button className='btn btn-outline-success my-3 outline-button-style'>Upload</button>
            </div>
          </div>
        </div>
        <div className="col-sm-8"></div>
      </div>
    </div>
    </>
  )
}

export default Upload