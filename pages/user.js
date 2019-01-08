import ProfilePage from '../components/ProfilePage';

const User = props => (
  <div>
    <ProfilePage id={props.query.id} />
  </div>
);

export default User;
