import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from '../../../src/Components/About/About';
import renderer from 'react-test-renderer';


describe('test for about page', () => {

test('About Us text is present', () => {
    render( <About /> );
    const textElement = screen.getByText("ABOUT US");
    expect(textElement).toBeInTheDocument();
});

test('testing href links', () => {
    render( <About /> );
    expect(screen.getByRole('link', { name: /github.com-JLLQA/i}).closest('a')).toHaveAttribute('href', 'https://www.github.com/JLLQA');
    expect(screen.getByRole('link', { name: /github.com-markgasmidoQA/i}).closest('a')).toHaveAttribute('href', 'https://www.github.com/markgasmidoQA');
    expect(screen.getByRole('link', { name: /github.com-PUgonaQA/i}).closest('a')).toHaveAttribute('href', 'https://www.github.com/PUgonaQA');
    expect(screen.getByRole('link', { name: /github.com-ryanglennersterQA/i}).closest('a')).toHaveAttribute('href', 'https://www.github.com/ryanglennersterQA');
    expect(screen.getByRole('link', { name: /github.com-sajathraffeekQA/i}).closest('a')).toHaveAttribute('href', 'https://www.github.com/sajathraffeekQA');
});

test('testing contact us button link', () => {
    render( <About/> );
    expect(screen.getByRole('link', { name: /If you wish to contact the team, please click here/i})).toHaveAttribute('type', 'button');
})

test('It matches snapshot', () => {
    const tree = renderer.create(<About/>).toJSON();
    expect(tree).toMatchSnapshot();
})

});