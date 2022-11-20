import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {TbLayoutDashboard} from 'react-icons/tb';
import {HiOutlineLogout,HiOutlineChartSquareBar, HiOutlineChartPie, HiOutlineDocument} from 'react-icons/hi';
import {BiShoppingBag} from 'react-icons/bi';
import {MdOutlineNotificationAdd} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import {BsArrowRight} from 'react-icons/bs'
import logo from '../images/brandlogo.png'
import hand from '../images/hand.png'
import {motion} from 'framer-motion'

function SideBar() {
  return (
    <Sidebar>
        <motion.img whileHover={{scale:1.1}} src={logo} alt="logo"/>
        <ul >
       <li> <StyledLink to="/dashboard"><TbLayoutDashboard/> Dashboard</StyledLink> </li>
       <li> <StyledLink to="/transaction"><HiOutlineChartSquareBar/> Transaction</StyledLink> </li>
       <li> <StyledLink to="/task"><HiOutlineChartPie/> Task</StyledLink> </li>
       <li> <StyledLink to="/documents"><HiOutlineDocument/> Documents</StyledLink> </li>
       <li> <StyledLink to="/store"><BiShoppingBag/>Store</StyledLink> </li>
       <li> <StyledLink to="/notifications"><MdOutlineNotificationAdd/>Notification</StyledLink> </li>
       <li> <StyledLink to="/profile"><CgProfile/> Profile</StyledLink> </li>
       <li> <StyledLink to="/settings"><FiSettings/> Settings</StyledLink> </li>
       
            <Upgrade>
            <motion.img whileHover={{scale: 1.1}} src={hand} alt="hand"/>
            <p>Upgrade to <span>Pro</span> for get all features.</p>
            <Pro to={'/upgrade'}>Upgrade Now <BsArrowRight/></Pro>
            </Upgrade>
        <li> <StyledLink to="/logout"><HiOutlineLogout/> Logout</StyledLink> </li>
        </ul>
    </Sidebar>
  )
}
const Pro = styled(NavLink)`
color:#1081e9;
text-decoration: none;
font-size: 13px;
position: absolute;
top: 70%;
left: 10%;
svg{
    padding-left: 5px;
    font-size: 20px;
}
`
const Upgrade = styled.div`
background-color: #e9f2ff;
@media (max-width: 1200px){
    left: -10%;
}
height: 150px;
width: 170px;
margin-top: 80px;
margin-bottom: 20px;
border-radius: 10px;
position: relative;

img{
    position: absolute;
    left :40px;
    top: -50px;
    -webkit-filter: drop-shadow(0px 5px 5px grey);
    filter: drop-shadow(0px 5px 5px grey);
    min-height: 80px;
    max-width: 80px;
    cursor: pointer;
}
p{
    position: absolute;
    top: 30%;
    padding-left: 5px;
    font-size: 13px;
    span{
        font-weight: bold;
    }
}
`
const Sidebar = styled.div`
background-color: white;
height: 100vh;
width: 240px;

ul {
list-style-type: none;
    li{
        padding-top: 20px;
        @media (max-width: 1200px){
            font-size: 13px;
        }
    }
}
img{
    height: 60px;
    width: 120px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    
}


`
const StyledLink = styled(NavLink)`
text-decoration: none;
border: 1px solid white;
border-radius: 10px;
padding: 5px 30px 10px 5px;
margin-right: 20px;
color: #687887;
&:hover{
    color: #dd4443;
}
&.active{
  
    background-color: #62b4ff;
    color: white;
}
svg{
    margin-right: 5px;
   
}
`
export default SideBar;