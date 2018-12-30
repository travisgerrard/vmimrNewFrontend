import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles data-test="nav">
        {me && (
          <>
            <Link href="/createLearningCard">
              <a>pearl</a>
            </Link>
            <Link href="/createPresentation">
              <a>presentation</a>
            </Link>
            <Link href="/">
              <a>
                <Signout />
              </a>
            </Link>
          </>
        )}
        {!me && (
          <>
            <Link href="/signup">
              <a>Sign In</a>
            </Link>
          </>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
