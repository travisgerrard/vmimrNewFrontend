// Aggregates all the presentations by a specific user
// id = the user id

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
