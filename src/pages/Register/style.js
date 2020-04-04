import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
from {
  transform: rotate(0deg);
} to {
  transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  background: #e02041;
  color: #f0f0f5;
  border: 0;
  height: 50px;
  width: 450px;
  padding: 15px;
  margin-top: 10px;
  margin-left: 0px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
