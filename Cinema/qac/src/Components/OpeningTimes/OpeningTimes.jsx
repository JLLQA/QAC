import Navbar from "../Navbar/Navbar";

import React from 'react';
import { Table } from 'reactstrap';

const OpeningTimes = () => {
    return (

        <div>
            <Navbar />

<container align='center' >
    <br/>
            <h1  style={{ color: 'White' }}>OPENING TIMES</h1>
            <br/>
            <Table size="sm" borderless  style={{ color: 'White' }}>
      <thead>
        <tr >
         
          <th >DAY</th>
          <th>TIME</th>
        </tr>
      </thead>
      <br/>
      <tbody>
        <tr>
          <td>MONDAY</td>
          <td>10:00 AM - 11:00 PM</td>
        </tr>
        <tr>
          <td>TUESDAY</td>
          <td>10:00 AM - 11:00 PM</td>
        </tr> 
        <tr>
          <td>WEDNESDAY</td>
          <td>10:00 AM - 11:00 PM</td>
        </tr> 
        <tr>
          <td>THURSDAY</td>
          <td>10:00 AM - 11:00 PM</td>
        </tr> 
        <tr>
          <td>FRIDAY</td>
          <td>10:00 AM - 1:00 AM</td>
        </tr>
        <tr>
          <td>SATURDAY</td>
          <td>9:00 AM - 1:00 AM</td>
        </tr>
        <tr>
          <td>SUNDAY</td>
          <td>9:00 AM - 1:00 AM</td>
        </tr>
<br/>
        <tr>
          <td>BANK HOLIDAYS</td>
          <td>11:00 AM - 10:00 PM</td>
        </tr>
      </tbody>
    </Table>

    

            </container>
        </div>
    );
}
export default OpeningTimes;