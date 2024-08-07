import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  padding: 0.625rem 0.625rem 0.625rem 2.5rem;
  border-radius: 0.938rem;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);

  @media (min-width: 769px) {
    max-width: 80%;
    height: 4.313rem;
  }
`;

const InputStyle = styled.input`
  font-family: "Space Mono", monospace;
  border: none;
  color: #4b6a9b;
  font-size: 18px;
  font-style: normal;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const ButtonStyle = styled.button`
  font-family: "Space Mono", monospace;
  border: none;
  color: #fff;
  border-radius: 10px;
  background: #0079ff;
  width: 106px;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
`;

export {
    FormWrapper,
    InputStyle,
    ButtonStyle,
};
