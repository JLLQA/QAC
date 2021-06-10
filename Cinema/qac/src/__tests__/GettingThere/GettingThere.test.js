import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';
import { BrowserRouter as Router} from "react-router-dom"

import GettingThere from '../../Components/GettingThere/GettingThere';

describe('test for GettingThere page', () => {

    test('Getting There heading text is present', () => {
        render(<Router>
       <GettingThere />
        </Router>);
        const linkElement = screen.getByText("GETTING TO THE CINEMA");
        expect(linkElement).toBeInTheDocument();
    });

    test("testing hrefs to contain links", () => {
        render(<Router>
        <GettingThere />
         </Router>);
        expect(screen.getByRole('link', { name: /"Places to Go"/i })).toHaveAttribute('href', '/places');
    });

    test("It matches the snapshot", () => {
        render(<Router>
            <GettingThere />
             </Router>);
        const tree = renderer.create(<h5>We advise pre-booking your parking here to make your travel to the venue much quicker and more economic.</h5>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});