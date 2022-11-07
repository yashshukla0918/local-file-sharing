import React from 'react'

const Image = (props) => {
    return (
        <>  
       <div className="col-sm-3 text-center" key={props.image}>
                <img  src={URL.createObjectURL(props.image)} alt="IMG" className="w-100 border border-dark img-fluid img-thumbnail float-left" />
            </div>
        </>
    )
}

export default Image