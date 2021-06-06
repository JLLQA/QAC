import NewReleaseCard from "./NewReleaseCard";
import Searchbar from "../Searchbar/Search";

const Releases = ({ props }) => {

    const { data, query, q } = props;

    // //searchBar methods
    const filterQuery = () => (data) => data.title.toLowerCase().includes(query.toLowerCase());
    let filteredList = data.filter(filterQuery());
    

    //Return body
    return (
        <>
        <Searchbar query={q}/>
         {
            filteredList.map((newrel)=>(
                
            <NewReleaseCard key={newrel.id} newReleases={newrel}/>
            ))
        } 
        </>

    )

}

export default Releases;