import styled from '@emotion/styled';



export const SearchForm = styled.form`
  margin-top: 20px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #8080804e;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 45px;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.grey};

  :hover {
    color: ${p => p.theme.colors.orange};
    background-color: #e2e0e0;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 5px 10px;
  color: ${p=>p.theme.colors.dark};

  ::placeholder {
    font: inherit;
    color: grey;
  }
`;
