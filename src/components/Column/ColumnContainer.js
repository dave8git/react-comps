import {connect} from 'react-redux';
import Column from './Column';

export const getCardForList = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => ({
  cards: getCardForList(state, props.id),
});

export default connect(mapStateToProps)(Column);