
function Table1row(props) { 

    return (
        <div className='row'>
            <h5 className='col-3'>
                {props.val.size}
            </h5>
            <h5 className='col-3'>
                {props.val.box}
            </h5>
            <h5 className='col-3'>
                {props.val.matt} 
            </h5>
            <h5 className='col-3'>
                {props.val.rail}
            </h5>
        </div>
    );
}

export default Table1row;