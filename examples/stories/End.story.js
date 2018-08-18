import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTruncate from '../../src/index';
import text from '../longText.js';
import '../style.css';
import '../tooltip.css';

export default storiesOf('React Truncate', module).add(
    'Truncate from end',
    () => {
        return (
            <div className="wrapper">
                <h3>One line truncate from the end</h3>
                <div className="element">
                    <ReactTruncate truncFrom="end">{text}</ReactTruncate>
                </div>

                <h3>3 lines truncate from the end</h3>
                <div className="element">
                    <ReactTruncate lines={3} truncFrom="end">
                        {text}
                    </ReactTruncate>
                </div>
            </div>
        );
    }
);
