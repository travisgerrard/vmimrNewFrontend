import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Search from './Search';
import User from './User';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.darkBlue};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  background: white;

  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <User>
    {({ data: { me } }) => (
      <StyledHeader>
        <div className="bar">
          <Logo>
            <Link href="/">
              <a>VM:IMR</a>
            </Link>
          </Logo>
          <Nav />
        </div>
        <div className="sub-bar">{me && <Search />}</div>
      </StyledHeader>
    )}
  </User>
);
export default Header;
