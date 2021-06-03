import { Container } from "reactstrap";

const Search = ({ query, queryFunction}) => {

    return (
        <Container>
            <div className="search">
                <br></br>
                <label>Search:</label>
                <input
                    type="text"
                    name="q"
                    id="q"
                    value={query}
                    onChange={queryFunction}
                />
                <br></br>
                <br></br>
            </div>
        </Container>
    )
}

export default Search;