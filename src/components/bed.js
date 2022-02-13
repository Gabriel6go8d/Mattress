
import { UserContext } from "../App"
import { useContext } from "react";

function Bed(props) {

    const goBedView = useContext(UserContext);

    function gotoBed(){
        document.getElementById("parent_view").style.opacity = 0
        setTimeout(() =>{
            goBedView(props.id)  
        }, 200)              
    }    

    return (
        <div className="bed" id={props.id} onClick={() => gotoBed()}>
            <div className="pillows">
                <div className='ellipse'></div>
                <div className='ellipse'></div>
            </div>             
            <div id={props.id+'text'} className='text_stock'></div>  
            <div id={props.id+'bedId'} className='text_id'></div>
        </div>
    );
}

export default Bed;