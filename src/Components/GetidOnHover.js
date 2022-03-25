import React, { useEffect, useState } from "react"
import Test from "./Test/Test";
function GetidOnHover() {
    const [imageData, setImageData] = React.useState([])
    const [imageState, setImageState] = useState('');
    const [loading, setLoading] = useState(false);
    const [mouseChange, setMouseChange] = useState(false);
    function fetchData() {
        // setLoading(true)
        fetch("https://retoolapi.dev/2eG8ov/data").then((results) => {
            //console.log(results)
            results.json().then((res) => {
                //console.log("img response", res)
                setImageData(res);
                // setImageState(0)
            })

        })
        // setLoading(false);
    }



    useEffect(() => {
        fetchData();
    }, [])

   

    return (
        <>
            <h1>Hi</h1>
            {
                imageData.map((items) => {

                    return <Test item={items} key={items.id}/>
                    // return <div><img onMouseOver={() => handleMouseOver(items.imgid)} onMouseOut={handleMouseOut} id={items.imgid} src={items.imgurl} style={{ height: 100 }} /></div>
                })

            }    </>
    )
}
export default GetidOnHover;