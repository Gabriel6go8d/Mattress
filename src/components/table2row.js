import { useEffect, useState } from "react";

function Table2row(props) { 

    const [show, setShow] = useState(false)

    useEffect(()=>{
        if(props.val.size === "Sizes"){
            setShow(true)
        }
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='row'>
            {show ? 
                (
                    <>
                        <h5 className='col-md-3 col-2'>
                            Sizes
                        </h5>
                        <h5 className='col-md-3 col-3'>
                            Without
                        </h5>
                        <h5 className='col-md-3 col-3'>
                            With 
                        </h5>
                        <h5 className='col-md-3 col-3'>
                            Platform 
                        </h5>
                    </>
                ) : (
                    <>
                        <h5 className='col-md-3 col-2'>
                            {props.val.size}
                        </h5>
                        <h5 className='col-md-3 col-3'>
                            {props.val.adjBNo} - {props.acce_inv} 
                        </h5>
                        <h5 className='col-md-3 col-3'>
                            {props.val.adjBYes} - {props.acce_inv2} 
                        </h5>
                        <h5 className='col-md-3 col-3'>
                            {props.val.platform}
                        </h5>
                    </>
                )
            }
        </div>
    );
}

export default Table2row;