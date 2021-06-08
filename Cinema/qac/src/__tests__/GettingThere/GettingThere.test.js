import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GettingThere from '../../Components/GettingThere/GettingThere';


test('GETTING TO THE CINEMA text is present', () => {
  render( <GettingThere /> );
  const linkElement = screen.getByText(/GETTING TO THE CINEMA/i);
  expect(linkElement).toBeInTheDocument();
  });