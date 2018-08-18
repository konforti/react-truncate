import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactTruncate from '../../src/index';
import '../tooltip.css';

export default storiesOf('React Truncate', module).add(
    'Truncate from end',
    () => {
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
                <h3>One line truncate from the end</h3>
                <div style={style}>
                    <ReactTruncate truncFrom="end" longText={text} />
                </div>

                <h3>3 lines truncate from the end</h3>
                <div style={style}>
                    <ReactTruncate lines={3} truncFrom="end" longText={text} />
                </div>
            </div>
        );
    }
);
