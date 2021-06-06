// import { Container } from "reactstrap";
import ReleaseCard from "./ReleaseCard";

const Release = ({ data , query}) => {
    console.log(data);
    
    const filterQuery = () => (data) => data.title.toLowerCase().includes(query.toLowerCase());
    let filteredList = data.filter(filterQuery());

    return (
          <div>      
         {
            filteredList.map((rel)=>(
            <ReleaseCard key={rel._id} release={rel}/>
            ))
        } 
        </div>
    )

}

export default Release;