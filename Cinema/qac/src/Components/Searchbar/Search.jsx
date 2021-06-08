import { Container } from "reactstrap";

const Search = ({ query, queryFunction}) => {

    return (
        <Container>
            <div className="search">
                <br></br>
                <input
                    placeholder = "Type here to search for film"
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