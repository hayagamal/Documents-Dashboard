import React from 'react'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table';
import {AiFillCaretDown} from 'react-icons/ai'
import {motion} from 'framer-motion'
function RecentOrders(props) {
  console.log(props.ord)
  return (
    <Recent>
        <h6>Recent Order</h6>
        <p>See More</p>
        <Table striped hover borderless>
      <thead>
        <tr style={{color: 'grey', 'font-weight': 'bold'}}>
          <td>File Name <AiFillCaretDown/></td>
          <td>Date <AiFillCaretDown/></td>
          <td>Size<AiFillCaretDown/></td>
          
        </tr>
      </thead>
      
      <tbody>
       {

        props.ord.map((record)=>{
          return(
            <React.Fragment>
              
            <tr>
              <td><span style={{backgroundColor: record.bgcolor}}>{record.icon}</span> {record.name}</td>
              <td>{record.date}</td>
              <td style={{'font-weight': 'bold'}}>{record.size}</td>
            </tr>
          </React.Fragment>
         
        )
        })
       }
        
      </tbody>
    </Table>
    </Recent>
  )
}
const Recent = styled.div`
background-color: white;
border-radius: 10px;
height:95%;
width: 430px;
padding: 30px;
font-size: 13px;
text-decoration: none;
h6{
    position: absolute;
}
p{
    float: right;
    font-size: 12px;
    font-weight: bold;
    color: grey;
    border: 1px #c9c9c9 solid;
    border-radius: 5px;
    padding: 5px 15px 5px 15px;
    cursor: pointer;
}
span{
  padding: 6px;
  margin: 5px;
  margin-right: 10px;
  font-size: 14px;
  color: white;
  border-radius: 5px;
  
  
}
`
export default RecentOrders