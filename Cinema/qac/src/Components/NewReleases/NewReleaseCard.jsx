import { Card, CardBody, CardText } from "reactstrap";

const NewReleaseCard = ({ newrel }) => {

    console.log(newrel);

    return (
        <Card >
            <CardBody>
                <img width="100" height="100" src={newrel.poster} alt="Card image cap" />
                <CardText>{newrel.id}</CardText>
                <CardText>{newrel.genre}</CardText>
                <CardText>{newrel.releasedate}</CardText>
            </CardBody>
        </Card>
    )

}

export default NewReleaseCard;