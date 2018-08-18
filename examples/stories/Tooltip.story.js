import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTruncate from '../../src/index';
import text from '../longText.js';
import '../style.css';
import '../tooltip.css';

export default storiesOf('React Truncate', module).add(
    'Truncate with conditional tooltip',
    () => {
        const createStore = initialState => {
            return class Comp extends React.Component {
                state = initialState;

                updateState = newState => {
                    this.setState(newState);
                };

                render() {
                    return this.props.connect(
                        this.state,
                        this.updateState
                    );
                }
            };
        };

        const Store = createStore({ truncated: false });
        return (
            <div className="wrapper">
                <h3>Conditional Tooltip</h3>
                <Store
                    connect={(state, updateState) => {
                        return (
                            <div
                                className="element tooltip-bottom"
                                data-tooltip={state.truncated ? text : ''}
                            >
                                <ReactTruncate
                                    onTruncate={truncated => {
                                        if (truncated) {
                                            updateState({ truncated: true });
                                        }
                                    }}
                                >
                                    {text}
                                </ReactTruncate>
                            </div>
                        );
                    }}
                />
            </div>
        );
    }
);
