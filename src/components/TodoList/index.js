import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-size: 18px;

  li {
    line-height: 36px;
  }
`;

const TodoList = () => (
  <List>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    <li>Quas, possimus magnam ab repudiandae molestiae.</li>
    <li>Dolor dolorum velit illum voluptates dolorem est esse.</li>
  </List>
);

export default TodoList;