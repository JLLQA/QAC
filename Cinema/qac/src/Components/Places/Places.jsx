import { Card, CardText, CardTitle, Button, CardImg, Container } from 'reactstrap';
import React from 'react';

const Places = () => {
  return (
    <div id="dropped-box" className="container-fluid">
      <Container>
        <div align='center'>
          <h1>PLACES TO GO</h1>
          <p className="lead">Manchester is vibrant city with many locations to visit.</p>
          <p>Down below, us at QA Cinema, have recommendations for you of places to visit if you wish to look around the venue.
              <br />
               The city of Manchester has plenty of interesting locations to visit and we hope we could help in planning out your day!</p>
        </div>
        <br />
        <Container>
          <Card body className="text-center">
            <CardTitle tag="h3">Manchester City Centre</CardTitle>
            <CardText>The city of Manchester is filled with locations to see and spend your time by yourself or friends and family!  </CardText>
            <CardImg src="https://i.pinimg.com/originals/3c/06/10/3c0610f06e91995eee02f5e582001953.jpg" alt="City Centre" />
            <Button id="external" href="https://www.visitmanchester.com/things-to-see-and-do" target="_blank">For comprehensive information of places to visit in Manchester,
               click here.</Button>
          </Card>
          <br />
          <Card body className="text-center">
            <CardTitle tag="h3">The Printworks</CardTitle>
            <CardText>This venue is large complex, ideal for a day out with family and friends, comprising of leisure activities and bars and restaurants.</CardText>
            <CardImg src="https://www.staycity.com/staycity2017/wp-content/uploads/2018/10/Printworks-Manchester.png" alt="Printworks" />
            <Button id="external" href="https://printworks-manchester.com/" target="_blank">Visit the 'Printworks' website for more info</Button>
          </Card>
          <br />
          <Card body className="text-center">
            <CardTitle tag="h3">Manchester Art Gallery</CardTitle>
            <CardText> To see a collection of the finest paintings and art pieces with international renown,
                 there's few places better than the Manchester Art Gallery.</CardText>
            <CardImg src="https://cdn.venuescanner.com/photos/oC5Ay/d6d51ab8affc198205e7d32fe1cd6379.jpg" alt="Art" />
            <Button id="external" href="https://manchesterartgallery.org/" target="_blank">Visit the 'Manchester Art Gallery' website for more info</Button>
          </Card>
          <br />
          <Card body className="text-center">
            <CardTitle tag="h3">Sea Life Manchester Aquarium</CardTitle>
            <CardText>As one of the biggest aquariums in Europe, housing hundreds of diverse marine life,
                 the Blue Planet Aquarium is one of the finest attractions in Manchester.</CardText>
            <CardImg src="https://www.visitsealife.com/manchester/media/uyrf5wtj/hp_banner_011920x875.jpg" alt="Aquarium" />
            <Button id="external" href='https://www.visitsealife.com/manchester/' target="_blank">Visit the 'Sea Life Manchester Aquarium' website for more info </Button>
          </Card>
          <br />
          <Card body className="text-center">
            <CardTitle tag="h3">Geese</CardTitle>
            <CardText>You may encounter geese during your visit around the venue.
                 Please be aware that they are part of our new travel options at QA Cinema. For more info, please visit our 'Getting There' page.</CardText>
            <CardImg src="https://www.awaywithgeese.com/wp-content/uploads/pub-banner.jpg" alt="Geese" />
          </Card>
        </Container>
      </Container>
    </div>
  )
}

export default Places;