import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from '../store/actionCreators/user';

const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};
export default useAction;
