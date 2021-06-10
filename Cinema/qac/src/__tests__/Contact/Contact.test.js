import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom"
import Contact from "../../Components/Contact/Contact"
import GettingThere from '../../Components/GettingThere/GettingThere';


test("discussion text is present", () => {
    render(
        <Router>
            <GettingThere/>
        </Router>
    );
    const linkElement = screen.getByText("GETTING TO THE CINEMA");
    expect(linkElement).toBeInTheDocument();
});