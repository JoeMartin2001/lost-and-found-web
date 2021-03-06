import styled from "styled-components";

export const FormWrapper = styled("div")`
  height: 350px;
  width: 450px;
  padding: 5px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  margin-bottom: 30px;

  @media (max-width: 550px) {
    width: 300px;
  }
`;
