import React from 'react'
import Image from './Image';
const ImageTile = (props) => {
    let rawContent = [];
    const singleRow = props.imageArray.reduce(
        (acc, p, i) => {
            rawContent.push(<Image key={i} image={p} />);
            if (i % 4 === 3) {
                acc.push(<div className='row my-2'>{rawContent}</div>);
                rawContent = [];
            }
            return acc;
        }, []
    )
    singleRow.push(<div className='row my-2'>{rawContent}</div>)
    return (
        <>
        {singleRow}
        </>
    )
}

export default ImageTile
/*
  <DivRow>
            {

                for (let i=0 ; i<props.imageArray.length;i++) {
                   
                    
                }

                // props.imageArray.map((file) => {
                //     counter++;
                //     return (
                //         <Image key={file} image={file} />
                //     )
                // })


            }
        </DivRow>
*/