import styled from 'styled-components';

export const StyledGoBackBtn = styled.button`
  cursor: pointer;
  text-decoration: none;
  background: rgb(3, 37, 65);
  font-size: 18px;
  color: #369baf;
  padding: 10px;
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 20px;
  display: inline-flex;
  border: 1px solid #369baf;
  border-radius: 10px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.1); /* Измените масштаб по вашему усмотрению */
    transition: transform 0.3s ease; /* Добавьте плавное переходное свойство */
  }
`;
