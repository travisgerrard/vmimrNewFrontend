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
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Link href="/createLearningCard">
              <a>Learned Something!</a>
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
