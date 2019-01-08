import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledCard = styled.div`
  background: white;
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;

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
    margin: 0;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    margin: 1rem 0 1rem 0;
    font-size: 1.5rem;
  }
`;

const CardTitle = styled.div`
  grid-template-columns: 1fr;
  display: grid;
  grid-auto-flow: column;
  svg {
    color: red;
  }
`;

const CardTitleCratedBy = styled(ReactMarkdown)`
  p {
    margin: 0;

    a {
      color: black;
      font-style: bold;
    }
  }
`;

const CardBody = styled(ReactMarkdown)`
  & > img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  & > p {
    font-size: 1.5rem;
  }
`;

export { CardBody, CardTitleCratedBy, CardTitle, StyledCard };
