import React from 'react';
import jsdom from 'jsdom'; // jsdom makes bundle.js think we're running inside of browser, not command line
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';

import reducers from '../src/reducers';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!DOCTYPE html><html><head></head><body></body></html>'); // create fake browser env
global.window = global.document.defaultView; // set our fake browser as our window view
const $ = jquery(global.window); // makes jQuery be responsible for our fake DOM above, not a browser DOM

// Build renderComponent helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  // Function below renders our component into our document (more specifically a fragment of it)
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={ createStore(reducers, state) }>
      <ComponentClass { ...props } />
    </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance)); // Produces HTML and wraps it in jquery element
}

// Build helper for simulating events ($.fn.simulate creates a jQuery simulate function) EX $('div').simulate()
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value); // val is jQuery method. Equivalent to $(component).val
  }
  TestUtils.Simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);
export { renderComponent, expect };
