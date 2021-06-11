import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import OpeningTimes from '../../Components/OpeningTimes/OpeningTimes';


test('opening times text is present', () => {
  render( <OpeningTimes /> );
  const linkElement = screen.getByText("OPENING TIMES");
  expect(linkElement).toBeInTheDocument();
  });