import React from 'react'
import styled from 'styled-components'
import {BsPlusLg} from 'react-icons/bs'
import {SlOptionsVertical} from 'react-icons/sl'
import RecentOrders from './RecentOrders';
import StorageDetails from './StorageDetails';
import Analytics from './Analytics';
import ProgressBar from 'react-bootstrap/ProgressBar';
function Files(props) {
    const {id, name, bgcolor, color, weight, total, GB, icon} = props;
    console.log(props.Fi);
    
  return (
    <Page>
       
    <h6>My Files</h6>
    <div className="addFiles"><BsPlusLg/> Add New</div>
    
    <MyFiles>
        {props.Fi.map((file) =>{
            return(
           <File key={file.id}>
            <SlOptionsVertical style={{color: '#cdcdcd'}}/>
            <div style={{backgroundColor: file.bgcolor, color: file.color}} >{file.icon}</div>
            <h6>{file.name}</h6>
            <progress max="100" value= {file.weight} >{file.weight} </progress>
            <p>{file.total}</p>
            <p>{file.GB}</p>
            
            
                
           </File>
            )
            
        })
    }
    </MyFiles>
  
    <FilesParts>
                    <RecentOrders className='recent' ord={props.order}/>
                    <Analytics className="analysis">Analytics</Analytics>
                    <StorageDetails strg={props.storag}/>
                    </FilesParts>
 
    </Page>
  )
}
const FilesParts = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
grid-column: 1;
grid-row: 3;

`
const Page = styled.div`
display: grid;
padding-left: 50px;

grid-auto-rows: minmax(70px, auto);
grid-template-rows:50px auto 400px;
position: relative;
gap: 0px;
.h6 {
    grid-column: 1;
    grid-row: 1;
  }
 .addFiles{
    border: 1px #249bf7 solid;
    background-color: #249bf7;
    padding: 7px;
    color: white;
    height: 40px;
    width: 110px;
    text-align: center;
    border-radius: 5px;
    font-size: 13px;
    grid-column: 2;
    grid-row: 1;
    margin-left: -470px;
    cursor: pointer;
    svg{
        font-size: 12px;
    }

 }

`
const File = styled.div`
height: 170px;
width: 180px;
background-color: white;
padding: 5px;
position: relative;
border-radius: 5px;
cursor: pointer;

&:hover{
    box-shadow: 3px 3px #cdcdcd;
}
div{
    padding: 7px 7px 7px 7px;
    margin: 3px;
    border-radius: 5px;
    position: absolute;
    
}
h6{
    padding-top: 55px;
}

p{
    display: inline;
    position: absolute;
    font-size: 12px;
    top: 85%;
    color: grey;
    left: 0%;

}
p~p{
    left: 70%;
    color: black;
    font-weight: bold;
}
svg{
    float: right;
    
}
`
const MyFiles = styled.div`
display: flex;
flex-wrap: nowrap;
@media(max-width: 1400px){
    flex-wrap: wrap;
}
gap: 30px;
margin-bottom: 40px;
grid-column: 1;
grid-row: 2;

`

export default Files