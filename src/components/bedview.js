import React from 'react'
import { UserContext } from "../App"
import { useContext, useState, useEffect } from "react";
import data from "../data.json"
import data_acc from "../data_acc.json"
import Table1row from './table1row';
import Table2row from './table2row';

function BedView(props) {

    const [acce_inv, setAcce_inv] = useState([]);
    const [acce_inv2, setAcce_inv2] = useState([]);
    const [bedinv, setBedInv] = useState(["","","","",""]);

    const user = useContext(UserContext);

    var thisBed    
    data.forEach(ss => {
        if(ss.id === props.bed){
            thisBed = ss
        }
    })    

    useEffect(() => {
        
        document.getElementById("parent_view").style.opacity = 1

        var bed_inv = []
        thisBed.size.forEach(ss => {
            var size_temp
            var inv_value = "NF"
            switch (ss) {
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
                if (ss === "Twin" && celda === "TXL"){
                    break
                }                     
                if (celda.includes(thisBed.look.toUpperCase())) {                           
                    inv_value = props.excel[qq][size_temp+1]  
                    console.log(qq + "," + size_temp+1)      
                }
            }
            bed_inv.push(inv_value)
            console.log(bed_inv)
        })

        var acce_inv = []
        var acce_inv2 = []
        data_acc.forEach(ii => {
            acce_inv.push(props.excel[ii.adjBNo_pos[0]][ii.adjBNo_pos[1]])
            acce_inv2.push(props.excel[ii.adjBYes_pos[0]][ii.adjBYes_pos[1]])
        })
        setBedInv(bed_inv) 
        setAcce_inv(acce_inv)  
        setAcce_inv2(acce_inv2)         
    
                
    },[]);    // eslint-disable-line react-hooks/exhaustive-deps 
    
    function goBack(){
        document.getElementById("parent_view").style.opacity = 0
        setTimeout(() =>{
            user("")  
        }, 200)  
    }    

    return (
        <div className="bedview" id="bedview"> 
            <div className="row">
                <div className="col-md-4 col-lg-6">
                    <img src={require('../images/back3.png')} alt="back arrow" className='back_arrow' onClick={() => goBack()}/>
                    <h1>{thisBed.name}</h1>
                    <h5>{thisBed.id}</h5>
                    <h4>Type: {thisBed.type.toUpperCase()}</h4>
                    <h4>Count: Not Set</h4>
                    <div className='mt-5'>
                        <h4>Stock</h4>
                        {thisBed.size.map((ss, index) => <h4 key={index}>{bedinv[index]} - {ss}</h4>)}
                    </div>
                    <div className='mt-5'>
                        <h4>Stores</h4>
                        <h5>Richardson: 1002 N Central Expy, 75080</h5>
                        <h5>Dallas: 5545 Lyndon B Johnson Fwy, 75240</h5>
                    </div>
                    <div className='mt-5'>
                        <h4>Sizes</h4>
                        <h5>Twin: 39" x 75"</h5>
                        <h5>TXL: 39" x 80"</h5>
                        <h5>Full: 54" x 75"</h5>
                        <h5>Queen: 60" x 80"</h5>
                        <h5>King: 76" x 80"</h5>
                    </div>
                </div>
                <div className="col-md-8 col-lg-6">
                    <img src={require('../images/mlily.png')} alt="Mlily" className='brand_img'></img>
                    <div className='mt-5'>
                        {
                            data_acc.map((info, index) => <Table1row val={info} key={index}/>)
                        }
                    </div>
                    <div className='mt-5'>
                        {
                            data_acc.map((info, index) => <Table2row val={info} acce_inv={acce_inv[index]} acce_inv2={acce_inv2[index]} key={index}/>)
                        }            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BedView;