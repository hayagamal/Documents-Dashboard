import React from 'react'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'
import person from '../images/adam.jpg'
import {AiFillCaretDown} from 'react-icons/ai'
function Searchbar() {
  return (
    <div style={{display: 'flex'}}>
    <Search>
        <h4>Documents</h4>
        <input  type="text" placeholder='Search'/>
        <BsSearch/>
        
    </Search>
    
    
    <PersonalInfo>
    <img src={person} alt="user"/>
    <h6>Adam Aly</h6>
    <AiFillCaretDown/>
    </PersonalInfo>
   
    </div>
  )
}
const PersonalInfo = styled.div`
margin-top: 20px;
display: flex;
gap: 20px;
height: 50px;
width: 205px;
background-color: white;
border-radius: 10px;
cursor: pointer;
img{
  height: 40px;
  width: 40px;
  border-radius: 20%;
  margin-left: 10px;
  margin-top: 5px;
}
h6{
  padding: 15px 5px 15px 0px;
}
svg{
  margin-top: 20px;
  
}
`
const Search = styled.div`
display: flex;
padding: 20px;
gap: 550px;
position: relative;
input{

    height: 40px;
    width: 300px;
    border:none;
    border-radius: 10px;
    padding: 15px;

}
svg{
    position: absolute;
    left: 94.5%;
    top: 30%;
    border: 1px #62b4ff solid;
    border-radius: 5px;
    padding: 10px;
    font-size: 33px;
    background-color: #62b4ff;
    color: white;
    cursor: pointer;
    

}
`
export default Searchbar