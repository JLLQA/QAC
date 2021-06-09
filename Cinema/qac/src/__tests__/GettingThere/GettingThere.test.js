import '@testing-library/jest-dom';
import { getByTestId, getByText, render, screen } from '@testing-library/react';
import GettingThere from '../../Components/GettingThere/GettingThere';

describe('Tests for the Getting There page', () => {

test('GETTING TO THE CINEMA text is present', () => {
  render( <GettingThere /> );
  const gettingText = screen.getByText("GETTING TO THE CINEMA");
  expect(gettingText).toBeInTheDocument();
  });

  test('Getting address in the getting there page', () => {
    render(<GettingThere /> );
  const addressText = screen.getByText(/M1 6FQ/i);
  expect(addressText).tobeInTheDocument();

  });

//   test('Getting address', () => {

//     render(<GettingThere /> );

//     const element = getByText('M1 6FQ')

// expect(element).toHaveTextContent('M1 6FQ')


//   });

});