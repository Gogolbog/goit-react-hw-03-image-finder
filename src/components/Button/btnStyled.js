import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #3f51b5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: blue;
  }

  &:active {
    background-color: yellow;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
