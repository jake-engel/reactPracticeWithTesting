import { expect } from '../test_helper';
import CommentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('CommentsReducer', () => {
  it('handles action with unknown type', () => {
    expect(CommentReducer(undefined, {})).to.be.instanceof(Array);
    expect(CommentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'New comment' };
    expect(CommentReducer([], action)).to.eql(['New comment']);
  });
});
