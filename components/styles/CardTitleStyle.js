import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const CardTitleStyle = styled.div`
  display: flex;
  font-size: 2rem;
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
    font-size: 2rem;
  }
  a {
    color: black;
    font-style: bold;
    cursor: pointer;
  }

  /*
    1792x828px
    at
    326ppi
    iphone xr
    */
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    font-size: 2.5rem;
    p {
      font-size: 2.5rem;
    }
  }

  /* 2436x1125px at 458ppi iphone xs */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    font-size: 2.5rem;
    p {
      font-size: 2.5rem;
    }
  }

  /* 2688x1242px at 458ppi iphone xsmax */
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    font-size: 2.5rem;
    p {
      font-size: 2.5rem;
    }
  }
`;

export { CardTitleStyle };
