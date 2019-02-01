import ProfilePage from '../components/GroupPages/ProfilePage';
import PleaseSignIn from '../components/PleaesSignIn';

const User = props => (
  <div>
    <PleaseSignIn>
      <ProfilePage id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default User;
