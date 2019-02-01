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
