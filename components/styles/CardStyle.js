import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledCard = styled.div`
  background: white;
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem 75px 1rem;

  a {
    color: ${props => props.theme.darkerBlue};
  }
  a:hover {
    color: ${props => props.theme.darkerBlue};
    text-decoration: underline;
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }
  h1,
  h2,
  h3,
  h4 {
    font-size: 2.5rem;
    margin: 0px;
    line-height: 30px;
    padding: 0px 0px 5px 0px;
  }
  p {
    font-size: 2rem;
    line-height: 1;
    font-weight: 300;
    flex-grow: 1;
    margin: 0.5rem 0 0.5rem 0;
  }
  li {
    font-size: 2rem;
    line-height: 1;
    font-weight: 300;
    flex-grow: 1;
    margin: 0.5rem 0 0.5rem 0;
  }
  .slideShowPlaceHolder {
    background-color: ${props => props.theme.darkBlue};
    color: white;
    font-size: 17px;
    font-weight: 300;
    padding: 30px 5px;
    margin: 0;
    width: 300px;
    height: 100px;
  }
  .showSlidesButton {
    width: auto;
    background: ${props => props.theme.darkBlue};
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.darkBlue};
      background: white;
    }
    &:focus {
      outline: 0px;
    }
  }
  .bodyWrapper {
    white-space: pre-wrap;
  }

  .buttonList {
    display: grid;
    width: 97%;
    border-top: 1px solid ${props => props.theme.lightgrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: white;
    justify-items: center;

    & > * {
      background: white;
      border: 0;
      font-size: 2rem;
      vertical-align: middle;
      padding: 1rem;
    }
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 600px) {
    h1,
    h2,
    h3,
    h4 {
      font-size: 4vw;
      line-height: 25px;
      margin: 0px;
      padding: 0px 0px 5px 0px;
    }
  }

  /*
    1792x828px
    at
    326ppi
    iphone xr
    */
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    h1,
    h2,
    h3,
    h4 {
      font-size: 4vw;
      line-height: 35px;
      margin: 0px;
      padding: 0px 0px 5px 0px;
    }
  }

  /* 2436x1125px at 458ppi iphone xs */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    h1,
    h2,
    h3,
    h4 {
      font-size: 4vw;
      line-height: 35px;
      margin: 0px;
      padding: 0px 0px 5px 0px;
    }
  }

  /* 2688x1242px at 458ppi iphone xsmax */
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    h1,
    h2,
    h3,
    h4 {
      font-size: 4vw;
      line-height: 35px;
      margin: 0px;
      padding: 0px 0px 5px 0px;
    }
  }
`;

const StyledSearchCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  a {
    color: ${props => props.theme.darkerBlue};
  }
  a:hover {
    color: ${props => props.theme.darkerBlue};
    text-decoration: underline;
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }
  h1,
  h2,
  h3,
  h4 {
    font-size: 22px;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 16px;
    line-height: 1;
    font-weight: 300;
    flex-grow: 1;
    margin: 0.5rem 0 0.5rem 0;
  }
`;

const CardBody = styled(ReactMarkdown)`
  & > img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

export { CardBody, CardTitle, StyledCard, StyledSearchCard };
