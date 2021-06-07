import ReleaseCard from "./ReleaseCard";

const Release = ({ data , query}) => {

    const filterQuery = () => (data) => data.title.toLowerCase().includes(query.toLowerCase());
    let filteredList = data.filter(filterQuery());

    return (
          <div>
              <p>Click A Movie For More Information</p>     
         {
            filteredList.map((rel)=>(
            <ReleaseCard key={rel._id} release={rel}/>
            ))
        } 
        </div>
    );
}

export default Release;