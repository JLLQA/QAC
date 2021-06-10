import React from 'react';
import { Table, Container } from 'reactstrap';

const OpeningTimes = () => {
  document.title = "Opening Times"

  return (
    <div id="dropped-box" className="container-fluid">
      <Container id="open">
        <h1>OPENING TIMES</h1>
        <br />
        <div id="dropped-box" className="container-fluid">
          <Table size="sm" borderless id="open-table">
            <thead>
              <tr>
                <th id="head">DAY</th>
                <th id="head">TIME</th>
              </tr>
            </thead>
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
              <tr>
                <td>BANK HOLIDAYS</td>
                <td>11:00 AM - 10:00 PM</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}
export default OpeningTimes;