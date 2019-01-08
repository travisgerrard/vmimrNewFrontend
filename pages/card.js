import SingleCard from '../components/SingleCard';

const Card = props => (
  <div>
    <SingleCard id={props.query.id} />
  </div>
);

export default Card;
