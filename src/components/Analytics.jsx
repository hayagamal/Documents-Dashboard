import React from 'react'
import styled from 'styled-components'
import { Bar } from '@ant-design/plots';
import {series, options} from '../shared/analysis'
import ReactApexChart from "react-apexcharts";
function Analytics() {
  return (
    <AnalyticDiv>
       <ReactApexChart options={options} series={series} type="rangeBar" height={350} />
    </AnalyticDiv>
  )
}
const AnalyticDiv = styled.div`
height: 95%;
background-color: white;
width: 350px;
border-radius: 10px;

`
export default Analytics