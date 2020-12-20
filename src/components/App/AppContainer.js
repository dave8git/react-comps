import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  columns: state.columns,
  lists: state.lists,
});

export default connect(mapStateToProps)(App);