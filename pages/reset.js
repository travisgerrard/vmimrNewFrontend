// The resent password email landing site
import Reset from '../components/Reset';

const ResetPage = props => (
  <div>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPage;
