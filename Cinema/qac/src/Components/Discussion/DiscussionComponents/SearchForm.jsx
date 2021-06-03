import { Form } from "reactstrap";

const SearchForm = (props) => {
    const { handleSubmitSearch, query } = props;
    return (
        <Form>
            <input id="search" name="search " type="text" placeholder="Search by topic title" value={query} onChange={handleSubmitSearch} />
        </Form>
    )
}

export default SearchForm;