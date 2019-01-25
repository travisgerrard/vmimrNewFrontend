import PatientParser from '../components/patientParser/patientParser';

const patientParser = props => (
  <div>
    <PatientParser id={props.query.id} />
  </div>
);

export default patientParser;
