import React from "react";
import './Train.css'
import {data} from '../data/data'

function Train(){

    return(
        <div className="train">
       {data.map((item)=>{

           return(
           <div style={{backgroundImage:`${item.img}`}} className="container">
               
            <p> {item.name+' '+item.lastname}</p>
            <p> {item.role}</p>
            <div className="industries">
                {item.industry.map((item1)=>{
                    return(
                        <span>{item1}</span>
                    )
                })}
            </div>

           </div>
           )
       })}
        </div>
    )
}

export default Train