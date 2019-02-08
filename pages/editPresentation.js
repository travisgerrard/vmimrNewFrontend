// Currently lets admins adit presentations
// id = presentation id

import EditPresentation from '../components/EditPresentation';

const editPresentation = props => (
  <div>
    <EditPresentation id={props.query.id} />
  </div>
);

export default editPresentation;
