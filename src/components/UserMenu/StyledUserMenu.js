import styled from 'styled-components';
export const StyledUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .logOutBtn {
    text-align: center;
    text-decoration: none;
    color: white;
    background-color: #c779d0;
    font-size: 20px;
    padding: 20px;
    margin-right: 25px;
    display: inline-flex;
    border: 1px solid white;
    border-radius: 10px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .logOutBtn:hover,
  .logOutBtn:focus {
    cursor: pointer;
    transform: scale(1.1); /* Измените масштаб по вашему усмотрению */
    transition: transform 0.3s ease; /* Добавьте плавное переходное свойство */
  }


`;
