
import { UserContext } from "../App"
import { useContext } from "react";

function Bed(props) {

    const goBedView = useContext(UserContext);

    var pop = "bed"
    if (props.orientation === "hor"){
        pop += " " + props.orientation
    }

    function gotoBed(){
        document.getElementById("parent_view").style.opacity = 0
        setTimeout(() =>{
            goBedView(props.id)  
        }, 200)              
    }    

    return (
        <div className={pop} id={props.id} > 
            <div className='ellipse'></div>
            <div className='ellipse'></div>
            <div id={props.id+'text'} className='text_child' onClick={() => gotoBed()}></div>  
            <div id={props.id+'bedId'} className='text_child_id'></div>
        </div>
    );
}

export default Bed;