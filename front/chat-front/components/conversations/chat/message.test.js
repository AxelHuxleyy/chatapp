import React from 'react';
import "@testing-library/react"
import { render } from "@testing-library/react"
import Message from './message';

test('renders chat', () => {
  const own = true
  const message = "Hello"
  const component = render(<Message own={own} message={message} />);
  console.log(component)
})