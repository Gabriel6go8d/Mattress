import '../App.css';
import Bed from "./bed"
import data from "../data.json"
import { useState, useEffect } from "react";

function Floor(props) {
  console.log("floor render")
  
  const [status, setStatus] = useState(["", ""])

  useEffect(() => {

    data.forEach(element => {
      document.getElementById(element.id).classList.remove("high")
      document.getElementById(element.id).classList.remove("not_found_inv")
      document.getElementById(element.id + "text").innerText = ""

      if(status[0] === element.type && status[1] === "" ){  
        document.getElementById(element.id).classList.add("high")
      } 
      if(status[0] === "" && element.size.includes(status[1]) ){        
        document.getElementById(element.id).classList.add("high")
      }
      if(status[0] === element.type && element.size.includes(status[1]) ){        
        document.getElementById(element.id).classList.add("high")

        var size_temp
        var inv_value = "NF"
        switch (status[1]) {
          case "Twin":
            size_temp = 0
            break;
          case "TXL":
            size_temp = 0
            break;
          case "Full":
            size_temp = 3
            break;
          case "Queen":
            size_temp = 6
            break;  
          case "King":
            size_temp = 9
            break;      
          default:
            break;
        }
        for (let qq = 0; qq < 70; qq++) {
          const celda = props.excel[qq][size_temp].toUpperCase()
          if (status[1] === "Twin" && celda === "TXL"){
            break
          }
          if (celda.includes(element.look.toUpperCase())) {            
            inv_value = props.excel[qq][size_temp+1]        
          }
        }

        if (inv_value === "0" || isNaN(inv_value)){
          document.getElementById(element.id).classList.add("not_found_inv")
        }
        document.getElementById(element.id + "text").innerText = inv_value
      }
    });
    props.setSelection(status)  
    
  }, [status])  

  function high(signal, group){
    var types_buttoms = []
    if (group === 1){
      types_buttoms = document.getElementsByClassName("group1")
      for (var i = 0; i < types_buttoms.length; i++){
        types_buttoms[i].classList.remove("btn-danger")
        types_buttoms[i].classList.add("btn-dark")
      }
      if (status[0] !== signal){
        setStatus([signal, status[1]])
        document.getElementById(signal).classList.add("btn-danger")
        document.getElementById(signal).classList.remove("btn-dark")
      }else{
        setStatus(["", status[1]])
      } 
    }

    if (group === 2){
      types_buttoms = document.getElementsByClassName("group2")
      for (var j = 0; j < types_buttoms.length; j++){
        types_buttoms[j].classList.remove("btn-danger")
        types_buttoms[j].classList.add("btn-dark")
      }

      if (status[1] !== signal){
        setStatus([status[0], signal])
        document.getElementById(signal).classList.add("btn-danger")
        document.getElementById(signal).classList.remove("btn-dark")
      }else{
        setStatus([status[0], ""])
      } 
    } 

    if (group === 3){  
      console.log("in")
      document.getElementById(props.selection[0]).classList.add("btn-danger")
      document.getElementById(props.selection[0]).classList.remove("btn-dark")
      document.getElementById(props.selection[1]).classList.add("btn-danger")
      document.getElementById(props.selection[1]).classList.remove("btn-dark")
      setStatus(props.selection)
    } 
  }

  const [showbedid, setShowBedId] = useState(true)
  function showId() {
    setShowBedId(!showbedid)
    data.forEach(ele => {
      if (showbedid) {
        document.getElementById(ele.id+'bedId').innerHTML = ele.id.split('_')[1] +" "+ ele.name
      }else{
        document.getElementById(ele.id+'bedId').innerHTML = ""
      }      
    })
  }

  useEffect(() => {
    document.getElementById("parent_view").style.opacity = 1
    if(props.selection[0] !== ""){
      high(props.selection, 3)
    }     
  }, [])
  
  return (
    <div id='floor' className='floor'>  
      <div className='row'>
        <div className='col-md-2'>
          <Bed orientation='hor' id="bed_1"/>
          <Bed orientation='hor' id="bed_2"/>
          <Bed orientation='hor' id="bed_3"/>

          <button className='btn btn-dark w-100 mt-5 group1' id="firm" onClick={() => high("firm", 1)}>Firm</button>
          <button className='btn btn-dark w-100 mt-2 group1' id="medium" onClick={() => high("medium", 1)}>Medium</button>
          <button className='btn btn-dark w-100 mt-2 group1' id="soft" onClick={() => high("soft", 1)}>Soft</button>
          <button className='btn btn-dark w-100 mt-5 group2' id="Twin" onClick={() => high("Twin", 2)}>Twin</button>
          <button className='btn btn-dark w-100 mt-2 group2' id="TXL" onClick={() => high("TXL", 2)}>TXL</button>
          <button className='btn btn-dark w-100 mt-2 group2' id="Full" onClick={() => high("Full", 2)}>Full</button>
          <button className='btn btn-dark w-100 mt-2 group2' id="Queen" onClick={() => high("Queen", 2)}>Queen</button>
          <button className='btn btn-dark w-100 mt-2 group2' id="King" onClick={() => high("King", 2)}>King</button>

          <button className='btn btn-success w-100 mt-5' id="show_id" onClick={() => showId()}>Show ID</button>
        </div>

        <div className='col-md-7'>
          <div className='row justify-content-around'>
            <Bed id="bed_4"/>
            <Bed id="bed_5"/>
            <Bed id="bed_6"/>
            <Bed id="bed_7"/>
          </div>
          <div className='row mt-4 justify-content-around reverse'>
            <Bed id="bed_8"/>
            <Bed id="bed_9"/>
            <Bed id="bed_10"/>
            <Bed id="bed_11"/>
          </div>
          <div className='row  justify-content-around'>
            <Bed id="bed_12"/>
            <Bed id="bed_13"/>
            <Bed id="bed_14"/>
            <Bed id="bed_15"/>
          </div>
          <div className='row mt-4 justify-content-around reverse'>
            <Bed id="bed_16"/>
            <Bed id="bed_17"/>
            <Bed id="bed_18"/>
            <Bed id="bed_19"/>
          </div>
          <div className='row justify-content-around'>
            <Bed id="bed_20"/>
            <Bed id="bed_21"/>
            <Bed id="bed_22"/>
            <Bed id="bed_23"/>
          </div>
          <div className='row mt-4 justify-content-around reverse'>
            <Bed id="bed_24"/>
            <Bed id="bed_25"/>
            <Bed id="bed_26"/>
            <Bed id="bed_27"/>
          </div>
          <div className='row justify-content-around'>
            <Bed id="bed_28"/>
            <Bed id="bed_29"/>
            <Bed id="bed_30"/>
            <Bed id="bed_31"/>
          </div>
          <div className='row mt-4 justify-content-around'>
            <Bed id="bed_32"/>
            <Bed id="bed_33"/>
            <Bed id="bed_34"/>
            <Bed id="bed_35"/>
          </div>
        </div>


        <div className='col-md-2'>
          <Bed orientation='hor' id="bed_36"/>
          <Bed orientation='hor' id="bed_37"/>
          <Bed orientation='hor' id="bed_38"/>
          <Bed orientation='hor' id="bed_39"/>
          <Bed orientation='hor' id="bed_40"/>
          <Bed orientation='hor' id="bed_41"/>
          <Bed orientation='hor' id="bed_42"/>
          <Bed orientation='hor' id="bed_43"/>
        </div>
      </div>
    </div>
  );
}

export default Floor;