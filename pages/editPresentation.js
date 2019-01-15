import EditPresentation from '../components/EditPresentation';

const editPresentation = props => (
  <div>
    <EditPresentation id={props.query.id} />
  </div>
);

export default editPresentation;
