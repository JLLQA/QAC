import React from 'react';
import { Table } from 'reactstrap';
import { Link } from "react-router-dom"

const About = () => {

    return (
        <>
            <div align="center">
                <h1>ABOUT</h1>
                <p> Getting to know the team!</p>
                <p> Known as Team Po, this group of 5 worked extensively to create a functioning website for QA Cinemas.
                    Applying knowledge from over 10 weeks of training, the team aimed to meet the specification handed to them at the start of the project.
              </p>
                <div id="dropped-box" className="container-fluid" align="center">

                    <Table id="open-table"  borderless striped >
                        <thead align="center">
                            <tr >
                                <th></th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Github</th>
                            </tr>
                        </thead>
                        <tbody align="center">
                            <tr >
                                <th scope="row">1</th>
                                <td>Jordan</td>
                                <td>Lewis</td>
                                <td>JLewis@qa.com</td>
                                <td>github.com/JLLQA</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>Gasmido</td>
                                <td>MGasmido@qa.com</td>
                                <td>github.com/markgasmidoQA</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Philip</td>
                                <td>Ugona</td>
                                <td>PUgona@qa.com</td>
                                <td>github.com/PUgonaQA</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Ryan</td>
                                <td>Glennerster</td>
                                <td>RGlennerster@qa.com</td>
                                <td>github.com/ryanglennersterQA</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Mohamed Sajath</td>
                                <td>Raffeek</td>
                                <td>MMohamedRaffeek@qa.com</td>
                                <td>github.com/sajathraffeekQA</td>
                            </tr>
                        </tbody>
                    </Table>


                </div>
                    <br />

                <div align="center">
                    <Link to={{ pathname: `/contact` }}>
                        <button id="infoButton" type="button">
                            If you wish to contact the team, please click here    </button>
                    </Link>
                    
                </div>
            </div>
        </>
    );


}

export default About;