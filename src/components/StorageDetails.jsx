import React from 'react'
import styled from 'styled-components'
import DonutChart from 'react-donut-chart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion'
function StorageDetails(props) {
    let storage = props.strg;
  return (
    <Storage>
        <h6>Storage Details</h6>
        <DonutChart className="donut" height="200" width="200" legend={false}
  data={[
    {
      value: storage[0].storage
    },
    
    {
      value: storage[1].storage,
    },
    {
        value: 128-(storage[0].storage +storage[1].storage + storage[2].storage + storage[3].storage),
        isEmpty:true
      },
    {
        value: storage[2].storage,
    },
    {
        value: storage[3].storage,
    }, 
    
  ]} colors={["#2399fb","#28e0ff","yellow","#f6231b","#ffcc1a"]}
/>

        
          {
            storage.map((detail)=>{
                return(
                    <Card whileHover={{scale: 1.1}}className="row" key={detail.id}>
                        <div style={{color: detail.color}}>{detail.icon}</div>
                        
                        <ul>
                        <li><h5>{detail.name}</h5></li>
                       <li>{detail.total}</li>
                       </ul>
                       
                       <div> 
                        <span >{detail.storage}GB</span></div>
                    </Card>

                )
            })
          }
        
    </Storage>
  )
}


const Card = styled(motion.div)`
width: 80%;
height: 60px;
padding: 10px;
margin-top: 20px;
border: 1px #24e7fe solid;
border-radius: 5px;
display: block;
margin-left: auto;
margin-right: auto;
position: relative;


* {
   display: inline;
    font-size: 11px;
    svg{
        font-size: 25px;
        
    }
    li{
        position: absolute;
        font-size: 13px;
        h5{
            font-size: 14px;
        }
        
    }
    li~li{
        margin-top: 25px;
        font-size: 11px;
    }
    span{ float: right;}

}

`
const Storage = styled.div`
    margin-top: -260px;
    height: 85vh;
    width: 350px;
    background-color: white;
    border-radius: 10px;
    h6{
        padding: 15px;
    }
    .donut{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }
    
  
`
export default StorageDetails