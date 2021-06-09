import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Places from '../../Components/Places/Places';

describe('test for place to go page', () => {

    test('PLACES TO GO heading text is present', () => {
        render(<Places />);
        const linkElement = screen.getByText("PLACES TO GO");
        expect(linkElement).toBeInTheDocument();
    });

    test("testing hrefs to contain links", () => {
        render(<Places />);
        expect(screen.getByRole('link', { name: /For comprehensive information of places to visit in Manchester,click here./i }).closest('a')).toHaveAttribute('href', 'https://www.visitmanchester.com/things-to-see-and-do');
        expect(screen.getByRole('link', { name: /Visit the 'Printworks' website for more info/i }).closest('a')).toHaveAttribute('href', 'https://printworks-manchester.com/');
        expect(screen.getByRole('link', { name: /Visit the 'Manchester Art Gallery' website for more info/i }).closest('a')).toHaveAttribute('href', 'https://manchesterartgallery.org/');
        expect(screen.getByRole('link', { name: /Visit the 'Sea Life Manchester Aquarium' website for more info/i }).closest('a')).toHaveAttribute('href', 'https://www.visitsealife.com/manchester/');

    });
});
