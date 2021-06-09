import '@testing-library/jest-dom';
import { getByText, render, screen } from '@testing-library/react';
import { Button } from 'reactstrap';
import Places from '../../Components/Places/Places';

describe('test for place to go page', () => {

test('PLACES TO GO text is present', () => {
  render( <Places /> );
  const linkElement = screen.getByText("PLACES TO GO");
  expect(linkElement).toBeInTheDocument();
  });

});
  
  // test('PLACES TO GO link is present', () => {
      
      //  render (<Button id="external" href="https://www.visitmanchester.com/things-to-see-and-do" target="_blank">For comprehensive information of places to visit in Manchester,click here.
//     </Button>)

//     expect(screen.getByText('click here').closest('a')).toHaveAttribute('href', 'https://www.visitmanchester.com/things-to-see-and-do');
//     // expect(getByText('visit in Manchester,click here').closest('a')).toHaveAttribute('href', 'https://www.visitmanchester.com/things-to-see-and-do')

//     // expect(getByText("visit in Manchester,click here").href).toBe("https://www.visitmanchester.com/things-to-see-and-do")
// //   expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.visitsealife.com/manchester/', 'https://printworks-manchester.com/', 'https://manchesterartgallery.org/', 'https://www.visitmanchester.com/things-to-see-and-do');
// });


describe('test for manchester', () => {

    test("testing href", () => {
        render( <Places /> );
        expect(screen.getByRole('link', {name: /For comprehensive information of places to visit in Manchester,click here./i}).closest('a')).toHaveAttribute('href', 'https://www.visitmanchester.com/things-to-see-and-do');

});
});