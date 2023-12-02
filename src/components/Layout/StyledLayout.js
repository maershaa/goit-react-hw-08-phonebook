import styled from 'styled-components'; //npm install styled-components
export const StyledLayout = styled.div`
  padding: 20px;

  .headerContainer {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

    border-bottom: 1px solid #e7e9fc;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  }

  .headerContainer .list {
    padding-left: 0;
    padding-right: 0;
    margin-right: 25px;
  }

  .list {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  .headerLink {
    text-decoration: none;
    color: #369baf;
    font-size: 20px;
    padding: 20px;
    margin-right: 25px;
    display: inline-flex;
    border: 1px solid #369baf;
    border-radius: 10px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .headerLink:hover,
  .headerLink:focus {
    cursor: pointer;
    transform: scale(1.1); /* Измените масштаб по вашему усмотрению */
    transition: transform 0.3s ease; /* Добавьте плавное переходное свойство */
  }

  .headerLink.active {
    background-color: #369baf;
    color: white;
  }

  .errorBage {
    background-color: #ffcc00;
    border: 3px solid #ff9900;
    padding: 20px;
    text-align: center;
    font-size: 28px;
    color: #fff;
    margin-top: 20px;
    border-radius: 8px;
  }
  .info {
    text-align: center;
  }
`;
