import '@testing-library/jest-dom';
import ListingPage from '../../../src/Components/Listings/ListingPage';
import renderer from 'react-test-renderer';

describe ("Listing page testing", () => {

    test('It matches snapshot', () => {
        const tree = renderer.create(<ListingPage/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

})