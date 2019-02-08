// Aggregates all the presentations of a certain type
// id = presentation type

import PresentationTypePage from '../components/GroupPages/PresentationTypePage';
import PleaseSignIn from '../components/PleaesSignIn';

const presentatinType = props => (
  <div>
    <PleaseSignIn>
      <PresentationTypePage id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default presentatinType;
