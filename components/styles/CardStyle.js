import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledCard = styled.div`
  background: white;
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem 0.5rem 1rem;

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
  }
  p {
    font-size: 16px;
    line-height: 1;
    font-weight: 300;
    flex-grow: 1;
    margin: 0.5rem 0 0.5rem 0;
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
`;

export { CardBody, CardTitleCratedBy, CardTitle, StyledCard };
