import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Searchbar from './Searchbar'
import Files from './Files';
import styled from 'styled-components'
import { useState } from 'react';
import { files } from '../shared/files';
import { createGlobalStyle } from "styled-components";
import RecentOrders from './RecentOrders';
import {order} from '../shared/recent';
import {storagedetails} from '../shared/storage'
import StorageDetails from './StorageDetails';
import Analytics from './Analytics';
function Home() {
    const [file, SetFiles] = useState(files);
    const[orde, SetOrder] = useState(order);
    const [storage, SetStorage] = useState(storagedetails)
    
  return (
    
    <div style={{display: 'flex'}}>
        <Sidebar/>
            <div style={{display: 'flex','flex-direction': 'column'}}>   
              <Searchbar/>
              <Files storag={storage} order={orde} Fi={file}/>
              
               
                
                
            </div>
            
            
         <GlobalStyle/>
         
    </div>

  )
}

const GlobalStyle = createGlobalStyle`
  body {
   background-color: #fafafb;
   
  }`
export default Home;