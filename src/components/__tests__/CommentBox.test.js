import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

//common clean up code after every single test is executed component cleanup
// unmount from fake DOM
afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

// Check if textarea is wired up correctly with event target
// Find the textarea element
// Simulate a 'change' event
// Provide fake event object
// Force the component to update
// Assert that the textareas value has changed
it('has a textarea that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  });
});
