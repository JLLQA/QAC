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
       
        <p style={{ color: 'white' }} >Down below, us at QA Cinema, have reccomendations for you of places to visit if you wish to look around the venue. The city of Manchester has plenty of interesting locations to visit and we hope we could help in planning out your day!</p>
        <p className="lead">
          
        </p>
      {/* </Jumbotron> */}
    </div>
    <br/>
    <div>
      <Card body className="text-center">
        <CardTitle tag="h3">Manchester City Centre</CardTitle>
        <CardText>The city of Manchester is filled with locations to see and spend your time by yourself or friends and family!  </CardText>
      <CardImg top width="100%"  src="https://i.pinimg.com/originals/3c/06/10/3c0610f06e91995eee02f5e582001953.jpg" alt="Card image cap" />
        <Button href="https://www.visitmanchester.com/things-to-see-and-do" >For comprehensive information of places to visit in Manchester, click here.</Button>
      </Card>

      <Card body className="text-center">
        <CardTitle tag="h3">The Printworks</CardTitle>
        <CardText>This venue is large complex, ideal for a day out with family and friends, comprising of leisure activies and bars and restaurants.</CardText>
        <CardImg top width="100%"  src="https://www.staycity.com/staycity2017/wp-content/uploads/2018/10/Printworks-Manchester.png" alt="Card image cap" />
     
        <Button href="https://printworks-manchester.com/">Visit the 'Printworks' website for more info</Button>
      </Card>
      
      <Card body className="text-center">
        <CardTitle tag="h3">Manchester Art Gallery</CardTitle>
        <CardText> To see a collection of the finest paintings and art pieces with international renown, there's few places better than the Manchester Art Gallery.</CardText>
        <CardImg top width="100%"  src="https://cdn.venuescanner.com/photos/oC5Ay/d6d51ab8affc198205e7d32fe1cd6379.jpg" alt="Card image cap" />
     
        <Button href="https://manchesterartgallery.org/">Visit the 'Manchester Art Gallery' website for more info</Button>
      </Card>

      <Card body className="text-center">
        <CardTitle tag="h3">Sea Life Manchester Aquarium</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <CardImg top width="100%"  src="https://www.visitsealife.com/manchester/media/uyrf5wtj/hp_banner_011920x875.jpg" alt="Card image cap" />
        <Button href='https://www.visitsealife.com/manchester/'>Visit the 'Sea Life Manchester Aquarium' website for more info </Button>
      </Card>

      <Card body className="text-center">
        <CardTitle tag="h3">Geese</CardTitle>
        <CardText>You may encouter geese during your visit around the venue. Please be aware that they are part of our new travel options at QA Cinema. For more info, please visit our 'Getting There' page.</CardText>
        <CardImg top width="100%"  src="https://www.awaywithgeese.com/wp-content/uploads/pub-banner.jpg" alt="Card image cap" />
        
      </Card>
    </div>

   
</>
)


}
export default Places;