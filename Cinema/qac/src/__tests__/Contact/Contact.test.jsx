import '@testing-library/jest-dom';
import { fireEvent,getByText,render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Contact from '../../Components/Contact/Contact';

describe('test for contact page', () => {

    test('CONTACT heading text is present', () => {
        render(<Contact />);
        const linkElement = screen.getByText("CONTACT");
        expect(linkElement).toBeInTheDocument();
    });

    test("testing hrefs to contain links", () => {
        render(<Contact />);
        expect(screen.getByRole('link', { name: /Click for more Travel Info/i }).closest('a')).toHaveAttribute('href', 'http://localhost:3000/gettingthere');
        expect(screen.getByRole('button', { name: /Reset Form/i })).toHaveAttribute('type', 'reset');
    });

    test("It matches the snapshot", () => {
        const tree = renderer.create(<Contact />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("testing the form", () => {

        const handleSubmit = jest.fn();
      const formTest = render(
            <Contact handleSubmit={handleSubmit} />
        );
        
        const nameInput = screen.getByPlaceholderText('Enter name here');
        const emailInput = screen.getByPlaceholderText('Enter email here');
              
        const messageInput = screen.getByPlaceholderText('Enter message here');
        
        fireEvent.change(nameInput, { target: { value: "abc" } });
        fireEvent.change(emailInput, { target: { value: "abc@qa.com" } });
        
        fireEvent.click(screen.getByText("-- Select a Subject --"));
        fireEvent.click(screen.getByText("Movies"));
        
        fireEvent.change(messageInput, { target: { value: "hello" } });

        expect(nameInput.value).toBe("abc");
        expect(emailInput.value).toBe("abc@qa.com");
        expect(messageInput.value).toBe("hello");
           
    });
});