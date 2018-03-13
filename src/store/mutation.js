/**
 * Created by admin on 2018/3/13.
 */
const REMEBER_RESULT = 'REMEBER_RESULT';

export default {
  [REMEBER_RESULT](state, result) {
    state.result = result;
  }
}
