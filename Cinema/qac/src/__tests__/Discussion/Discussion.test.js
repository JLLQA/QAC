import '@testing-library/jest-dom';
import axios from "axios";
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom"
import Discussion from '../../Components/Discussion/Discussion';
import SearchForm from '../../Components/Discussion/DiscussionComponents/SearchForm';
import TopicForm from '../../Components/Discussion/DiscussionComponents/TopicForm';
import { shallow } from 'enzyme';
import { useState } from 'react';
import renderer from "react-test-renderer"

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TopicContainer from '../../Components/Discussion/DiscussionComponents/TopicContainer';
Enzyme.configure({ adapter: new Adapter() });


describe("testing discussion page functionality", () => {


    test('Test click event', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<button id="submitButton" onClick={mockCallBack} type="submit">Create Topic</button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    test("testing links", async () => {
        const mockdata = [{
            id: "1",
            title: "title",
            username: "username",
            body: "body"
        }]
        render(<Router>
            <TopicContainer
                query=""
                data={mockdata}
            />
        </Router>);
        expect(screen.getByRole('link', { name: /More/i })).toHaveAttribute('href', '/topics/title');
    });

    //backend server 5000 has to be running
    test("Discussion text is present", async () => {
        render(
            <Router>
                <Discussion />
            </Router>
        );
        await axios.get(`http://localhost:5000/topics`);

        const discussionText = screen.getByText("DISCUSSION BOARD");
        expect(discussionText).toBeInTheDocument();
    });


    test("Loading text is present when data has not loaded", () => {
        render(
            <Router>
                <Discussion />
            </Router>
        );
        const loadingText = screen.getByText("Loading...");
        expect(loadingText).toBeInTheDocument();
    });


    test("Text component loaded correctly", () => {
        render(
            <Router>
                <Discussion />
            </Router>
        );
        const tree = renderer
            .create(<h1>DISCUSSION BOARD</h1>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });


    test("Testing if search bar passes values correctly", () => {
        const page =
            render(

                <Router>
                    <SearchForm />
                </Router>
            );
        const input = page.container.querySelector("#search");
        fireEvent.change(input, { target: { value: "testingthisreturnsnothing" } });
        expect(input.value).toBe("testingthisreturnsnothing");
    })

    test("Testing if topic inputs changes value correctly", () => {
        const page = render(
            <Router>
                <TopicForm />
            </Router>
        );
        const input1 = page.container.querySelector("#username");
        const input2 = page.container.querySelector("#topic_title");
        const input3 = page.container.querySelector("#topic_body");
        fireEvent.change(input1, { target: { value: "testingthisreturnsnothing" } });
        fireEvent.change(input2, { target: { value: "testingthisreturnsnothing" } });
        fireEvent.change(input3, { target: { value: "testingthisreturnsnothing" } });
        expect(input1.value).toBe("testingthisreturnsnothing");
        expect(input2.value).toBe("testingthisreturnsnothing");
        expect(input3.value).toBe("testingthisreturnsnothing");
    })





})