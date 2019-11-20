import { connect } from 'react-redux';
import SingleInput from './SingleInput';
import handleUserInput from './actions/userInput/handleUserInput';

export default connect(
  state => ({
    state: state.userInput
  }),
  { handleUserInput }
)(SingleInput);