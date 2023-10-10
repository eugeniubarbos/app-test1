import React from "react";
import './Train.css'
import {data} from '../data/data'

function Train(){
    
    return(
        <div className="train">
       {data.map((item)=>{

           return(
           <div style={{backgroundImage:`url(${item.img})`}} className="container">
               
            <p className="firstp ptrain"> {item.name+' '+item.lastname}</p>
            <p className="ptrain "> {item.role}</p>
            <div className="industries">
                {item.industry.map((item1)=>{
                    return(
                        <p className="pindustries">{item1}</p>
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