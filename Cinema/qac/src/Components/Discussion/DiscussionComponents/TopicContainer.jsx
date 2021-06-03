
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';

const TopicContainer = (props) => {
    const { data } = props
    const handleClick = (event) => {
        event.preventDefault();
        
    }

    return (
        // axios get request for all topic objects - map 
        <Container align="center">
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Topic title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Username</CardSubtitle>
                        <CardText>Card body</CardText>
                        <Button onClick={handleClick}>More Details</Button>
                    </CardBody>
                </Card>
            </div>
        </Container>
    )

}

export default TopicContainer;