import styled from 'styled-components';

// Стилизованный контейнер для "Nothing Found"
export const NothingFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;

  .nothingFoundTitle {
    font-size: 2rem;
    color: white;
    margin-bottom: 10px;
  }

  .nothingFoundText {
    font-size: 1.2rem;
    color: white;
  }
`;
