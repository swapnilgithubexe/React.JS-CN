import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
background: ${(props) => props.filled ? props.bg : "transparent"};
  border: ${(props) => (props.filled ? "none" : "2px solid black")};
color: ${(props) => props.filled ? props.color : "black"};
`;
