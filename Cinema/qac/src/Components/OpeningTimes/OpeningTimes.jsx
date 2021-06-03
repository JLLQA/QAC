import Navbar from "../Navbar/Navbar";
import React from 'react';
import { Table } from 'reactstrap';

const OpeningTimes = () => {
  return (
    <div>
      <Navbar />
      <div id="dropped-box" className="container-fluid">
        <container id = "open">
          <br/>
          <h1>OPENING TIMES</h1>
          <br/>
          <Table size="sm" borderless id="open-table">
            <thead>
              <tr>
                <th>DAY</th>
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
                <td>10:00 AM - 01:00 AM</td>
              </tr>
              <tr>
                <td>SATURDAY</td>
                <td>09:00 AM - 01:00 AM</td>
              </tr>
              <tr>
                <td>SUNDAY</td>
                <td>09:00 AM - 01:00 AM</td>
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
    </div>
  );
}
export default OpeningTimes;