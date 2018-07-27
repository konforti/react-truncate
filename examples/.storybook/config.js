import { configure } from '@storybook/react';
/* while using Truncate we runtimegenerator error https://github.com/storybooks/storybook/issues/489 */
window.regeneratorRuntime = require('babel-runtime/regenerator');

function loadStories() {
    require('../stories/index.js');
}

configure(loadStories, module);
