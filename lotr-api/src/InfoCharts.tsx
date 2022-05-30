import React from 'react'
import BarChart from './Charts/BarChart';
import BarChart2 from './Charts/BarChart2';
import { Link } from 'react-router-dom';

const InfoCharts = () => {

  return (
    <div>
        <h3><Link to ="/">Table</Link></h3>
        <h1 style={{ textAlign: "center"}}>LotR Gender Distribution</h1>
        <BarChart />
        <h1 style={{ textAlign: "center"}}>LotR Race Distribution</h1>
        <BarChart2 />
    </div>
  )
}

export default InfoCharts