'use strict';

describe('MobilePracticeApp', () => {
  let React = require('react/addons');
  let MobilePracticeApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MobilePracticeApp = require('components/MobilePracticeApp.js');
    component = React.createElement(MobilePracticeApp);
  });

  it('should create a new instance of MobilePracticeApp', () => {
    expect(component).toBeDefined();
  });
});
