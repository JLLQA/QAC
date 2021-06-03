import Navbar from "../Navbar/Navbar";

import {
    Card, CardText, CardBody, CardLink,
    CardTitle, Button, CardImg,Jumbotron,CardImgOverlay, CardSubtitle
  } from 'reactstrap';
import React from 'react';

const Places =()=>{
return (
<>
    <Navbar/>
    <br/>
    
<div align='center'>
      {/* <Jumbotron align='center'> */}
        <h1 className="display-3"style={{ color: 'white' }} >Places to visit!</h1>
        <p className="lead"style={{ color: 'white' }} >Manchester is vibrant city with many locations to visit.</p>
        <hr className="my-2" />
        <p style={{ color: 'white' }} >It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary" >Learn More</Button>
        </p>
      {/* </Jumbotron> */}
    </div>
    <br/>
    <div>
      <Card body className="text-center">
        <CardTitle tag="h5">Manchester City Centre</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <CardImg top width="100%"  src="https://i.pinimg.com/originals/3c/06/10/3c0610f06e91995eee02f5e582001953.jpg" alt="Card image cap" />
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <CardImg top width="100%"  src="https://static.designmynight.com/uploads/2021/02/Dakota-Grill-optimised.jpg" alt="Card image cap" />
     
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle tag="h5">Sea Life Manchester Aquarium</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <CardImg top width="100%"  src="https://www.visitsealife.com/manchester/media/uyrf5wtj/hp_banner_011920x875.jpg" alt="Card image cap" />
        <Button>Go somewhere</Button>
      </Card>
    </div>

   
</>
)


}
export default Places;