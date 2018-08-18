import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTruncate from '../../src/index';
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

        const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

        const style = {
            width: '100%',
            padding: '20px',
            marginBottom: '10px',
            background: '#eee',
            fontFamily: 'Verdana',
        };
        return (
            <div style={{ padding: '20px', fontFamily: 'Arial' }}>
                <h3>Conditional Tooltip</h3>
                <Store
                    connect={(state, updateState) => {
                        return (
                            <div
                                style={style}
                                data-tooltip={state.truncated ? text : ''}
                                className="tooltip-bottom"
                            >
                                <ReactTruncate
                                    onTruncate={truncated => {
                                        if (truncated) {
                                            updateState({ truncated: true });
                                        }
                                    }}
                                    longText={text}
                                />
                            </div>
                        );
                    }}
                />
            </div>
        );
    }
);
