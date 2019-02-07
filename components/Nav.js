import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';
import Popup from 'reactjs-popup';

const Tooltip = () => (
  <Popup
    trigger={open => <a className="button">Admin</a>}
    position="bottom center"
    on="hover"
  >
    <>
      <Link href="/email">
        <p>Specialist email</p>
      </Link>
      <Link href="/createWeeklyEmail">
        <p>Weekly Email</p>
      </Link>
      <Link href="/permissions">
        <p>Permissions</p>
      </Link>
    </>
  </Popup>
);

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles data-test="nav">
        {me && (
          <>
            <Link href={`/user?id=${me.id}`}>
              <a>me</a>
            </Link>
            <Link href="/createLearningCard">
              <a>pearl</a>
            </Link>
            {me.permissions.includes('ADMIN') && (
              <>
                <Link href="/createPresentation">
                  <a>presentation</a>
                </Link>
                <Tooltip />
              </>
            )}
            <Link href="/">
              <a>
                <Signout />
              </a>
            </Link>
          </>
        )}
        {!me && (
          <>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
