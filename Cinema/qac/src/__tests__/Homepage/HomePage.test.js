import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../../Components/Homepage/HomePage';
import renderer from 'react-test-renderer';

describe('test for home page', () => {

test('renders learn react link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText("Peter Rabbit 2");
  expect(linkElement).toBeInTheDocument();
});

test('It matches snapshot', () => {
    const tree = renderer.create(<HomePage/>).toJSON();
    expect(tree).toMatchSnapshot();
})

});