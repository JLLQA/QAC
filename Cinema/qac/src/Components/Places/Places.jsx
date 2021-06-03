import Navbar from "../Navbar/Navbar";

import {
    Card, CardText, CardBody, CardLink,
    CardTitle, Button, CardImg,Jumbotron, CardSubtitle
  } from 'reactstrap';
import React from 'react';

const Places =()=>{
return (
<>
    <Navbar/>
<div>
      <Jumbotron align='center'>
        <h1 className="display-3">Places to visit!</h1>
        <p className="lead">Manchester is a vibrant city bla bla</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
    <div>
      <Card body className="text-center">
      <CardImg top width="100%" src="https://eu-assets.simpleview-europe.com/manchester2016-invest/imageresizer/?image=%2Fdbimgs%2FINV%20-%20NAV%20THUMB%20-%20WHY%20MANCHESTER%20MAIN.jpg&action=FeaturedItems2x1" alt="Card image cap" />
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
      <Card body className="text-center">
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card>
    </div>


</>
)


}
export default Places;