import React from 'react'

const Image = (props) => {
    let column = [];

    switch (props.image.type) {
        case 'image/jpeg':
            column.push(<div className="col-sm-3">
                <img src={URL.createObjectURL(props.image)} alt="IMG" className="w-100 border border-dark img-fluid img-thumbnail float-left" />
                <small>{props.image.name}  {props.image.type}</small>
            </div>)
            break;
        case 'image/png':
            column.push(<div className="col-sm-3">
                <img src={URL.createObjectURL(props.image)} alt="IMG" className="w-100 border border-dark img-fluid img-thumbnail float-left" />
                <small>{props.image.name}  {props.image.type}</small>
            </div>)
            break;
        case 'video/mp4':

            column.push(<div className="col-sm-3">
                <video  src={URL.createObjectURL(props.image)} className='w-75 border border-dark img-fluid img-thumbnail float-left'></video>
            <small>{props.image.name}  {props.image.type}</small>
        </div>)
            break;
        default :
        column.push(<div className="col-sm-3 border border-danger py-2"><small className=' '>Not Suporting file<br/>
        File name : {props.image.name}<br/>
        File Type : {props.image.type}
        </small></div>)
        break;
    }
    return (
        <>  
        {column}
        </>
    )
}

export default Image