import RotationPage from '../components/GroupPages/RotationPage';

const Rotation = props => (
  <div>
    <RotationPage id={props.query.id} />
  </div>
);

export default Rotation;
