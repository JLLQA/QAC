import { Container } from "reactstrap";
import ReleaseCard from "./ReleaseCard";

const Release = ({ data , query}) => {
    console.log(data);


    const filterQuery = () => (data) => data.title.toLowerCase().includes(query.toLowerCase());
    let filteredList = data.filter(filterQuery());

    // const {title} = data;
    return (
        <div id="dropped-box" className="container-fluid">
            <Container align="center">
                <h1>NEW RELEASES</h1>
                
         {
            filteredList.map((rel)=>(
            <ReleaseCard key={rel.id} release={rel}/>
            ))
        } 
       
            </Container>
        </div>



    )

}

export default Release;