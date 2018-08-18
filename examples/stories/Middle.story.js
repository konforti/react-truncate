import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTruncate from '../../src/index';
import text from '../longText.js';
import '../style.css';
import '../tooltip.css';

export default storiesOf('React Truncate', module).add(
    'Truncate from middle',
    () => {
        return (
            <div className="wrapper">
                <h3>One line truncate from the middle</h3>
                <div className="element">
                    <ReactTruncate truncFrom="middle">{text}</ReactTruncate>
                </div>

                <h3>3 lines truncate from the middle with custom ellipsis</h3>
                <div className="element">
                    <ReactTruncate
                        lines={3}
                        ellipsis=" 👈 😃 👉"
                        truncFrom="middle"
                    >
                        {text}
                    </ReactTruncate>
                </div>
            </div>
        );
    }
);
