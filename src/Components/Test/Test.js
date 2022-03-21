import React, { useState } from 'react'

const Test = (props) => {

    
    const {id,name,imageid,image1,image2,image3}=props.item
    const [imageState,setImageState]=useState(image1)

    return (
        <>
        <div>
                <img onMouseOver={()=>setImageState(image2)} onMouseOut={()=>setImageState(image1)} id={id} src={imageState} style={{ height: 200 }} />
            </div>
            
            </>
    )
}

export default Test;

// onMouseOver={() => handleMouseOver(items.imgid)} onMouseOut={handleMouseOut}