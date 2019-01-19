import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const CardTitleStyle = styled.div`
  display: flex;
  font-size: 1.5vw;
  .createdBy {
    flex-basis: auto;
  }
  .distanceFrom {
    flex-basis: auto;
    cursor: default;
    padding-left: 3px;
    vertical-align: middle;
  }
  .likes {
    svg {
      vertical-align: middle;
    }
    span {
      padding-right: 5px;
      vertical-align: middle;
    }
    margin-left: auto;
  }

  span {
    vertical-align: middle;
  }
  p {
    display: inline-block;
    position: static;
    font-size: 2vw;
  }
  a {
    color: black;
    font-style: bold;
    cursor: pointer;
  }

  @media (max-width: 1400px) {
    font-size: 2vw;
    p {
      font-size: 2vw;
    }
  }

  @media (max-width: 800px) {
    font-size: 2.8vw;
    p {
      font-size: 2.8vw;
    }
  }

  @media (max-width: 600px) {
    font-size: 4.5vw;
    p {
      font-size: 4.5vw;
    }
  }
`;

export { CardTitleStyle };
