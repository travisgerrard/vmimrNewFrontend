// Aggregates all the presentations by rotation
// id = rptation tag

import RotationPage from '../components/GroupPages/RotationPage';
import PleaseSignIn from '../components/PleaesSignIn';

const Rotation = props => (
  <div>
    <PleaseSignIn>
      <RotationPage id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default Rotation;
