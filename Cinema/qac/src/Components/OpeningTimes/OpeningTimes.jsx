import Navbar from "../Navbar/Navbar";

import React from 'react';
import { Table } from 'reactstrap';

const OpeningTimes = () => {
    return (

        <div>
            <Navbar />

<container align='center'>
            <h1>OPENING TIMES</h1>
            <Table borderless dark>
      <thead>
        <tr>
         
          <th>Day</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>10:00 AM - 11:00 PM</td>
        </tr>
        <tr>
          <td>Monday</td>
          <td>10:00 AM - 11:00 PM</td>
        </tr> 
        <tr>
          <td>Tuesday</td>
          <td>10:00 AM - 11:00 PM</td>
        </tr> 
        <tr>
          <td>Wednesday</td>
          <td>10:00 AM - 11:00 PM</td>
        </tr> 
        <tr>
          <td>Thursday</td>
          <td>10:00 AM - 11:00 PM</td>
        </tr> 
        <tr>
          <td>Friday</td>
          <td>10:00 AM - 1:00 AM</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>9:00 AM - 1:00 AM</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>9:00 AM - 1:00 AM</td>
        </tr>
      </tbody>
    </Table>


            </container>
        </div>
    );
}
export default OpeningTimes;