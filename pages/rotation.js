import RotationPage from '../components/RotationPage';

const Rotation = props => (
  <div>
    <RotationPage id={props.query.id} />
  </div>
);

export default Rotation;
