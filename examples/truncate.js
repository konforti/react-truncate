import React from 'react';
import ReactDOM from 'react-dom';
import ReactTruncate from 'http://localhost:5000/src/index.js';

import './style.css';

const App = () => {
    <ReactTruncate
        render={longText => {
            return (
                <div className="title">
                    {longText(
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )}
                </div>
            );
        }}
    />;
};

ReactDOM.render(<App />, document.getElementById('root'));
