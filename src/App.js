import './App.css';
import { useState, createContext, useEffect } from "react";
import Floor from "./components/floor"
import BedView from "./components/bedview"
import React from 'react';

export const UserContext = createContext();

function App() {
  console.log("App render")

  const [bedview, setBedView] = useState("");
  const [selection, setSelection] = useState(["", ""])
  const [excel, setExcel] = useState();

  useEffect(() => {  
    
    var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTom6-HsUqvzztW2SNZrYWbo5SLOeGumiarWZ86MM7Ala-YDs8ITT6QoBYmkFWGsv7IPP53lmG-qxgO/pub?gid=0&single=true&output=csv";
    
    var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);
    jsonFile.send();
    
    jsonFile.onreadystatechange = function() {
      if (jsonFile.readyState=== 4 && jsonFile.status === 200) {
        var csv = require('jquery-csv');
        setExcel(csv.toArrays(jsonFile.responseText))
      }
    }
  }, [])  
  
  return (
    <div className='container mt-5 parent_view' id="parent_view" >  
      <UserContext.Provider value={setBedView}>
        {bedview === "" ? (          
          <Floor selection={selection} setSelection={setSelection} excel={excel}/>
        ) : (
          <BedView bed={bedview} excel={excel}/>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
