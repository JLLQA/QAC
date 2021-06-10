import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CarouselDisplay from '../../Components/Homepage/CarouselDisplay';
import renderer from 'react-test-renderer';

describe('test for carousel display component', () => {

test('renders learn react link', () => {
  render(<CarouselDisplay />);
  const linkElement = screen.getByText("Peter Rabbit 2");
  expect(linkElement).toBeInTheDocument();
});

test('It matches snapshot', () => {
    const tree = renderer.create(<CarouselDisplay/>).toJSON();
    expect(tree).toMatchSnapshot();
})

});