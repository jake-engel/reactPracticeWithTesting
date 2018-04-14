import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// describe: use to group together similar tests
// it: use to test a single attribute of a target
// expect: use to make an assertion about a target

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should show a comment box component', () => {
    expect(component.find('.comment-box-component')).to.exist;
  });

  it('should show a comment list component', () => {
    expect(component.find('.comment-list-component')).to.exist;
  });

});
