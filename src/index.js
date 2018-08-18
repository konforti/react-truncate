// @flow

import React from 'react';
import truncate from '@konforti/truncate';
import type {
    LongText,
    Lines,
    TruncFrom,
    Ellipsis,
    WrapperOffset,
    WrapperElement,
} from './types.js';

type Props = {
    children: string,
    style?: Object,
    lines?: Lines,
    onTruncate?: Function,
    truncFrom?: TruncFrom,
    ellipsis?: Ellipsis,
    wrapperOffset?: WrapperOffset,
};
class ReactTruncate extends React.Component<Props> {
    componentDidMount() {
        this.handleLongText();
        if (this.longTextWrapper) {
            window.addEventListener('resize', this.onResize, false);
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.children !== this.props.children) {
            this.handleLongText();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize, false);
    }

    onResize = () => {
        this.ticking = this.ticking || requestAnimationFrame(this.handleResize);
    };

    handleResize = () => {
        this.ticking = false;
        this.handleLongText();
    };

    // Function reference for
    // add/remove event listener.
    ticking = false;

    async handleLongText() {
        if (this.longTextWrapper) {
            const res = truncate(
                this.longTextWrapper,
                this.props.children,
                this.props.lines,
                this.props.truncFrom,
                this.props.ellipsis,
                this.props.wrapperOffset
            );
            this.props.onTruncate && this.props.onTruncate(res);
        }
    }

    // Reference to self wrapper element.
    longTextWrapper: ?WrapperElement = null;

    render() {
        const style = {
            ...{
                wordBreak: 'break-all',
                whiteSpace: 'normal',
                // Allow word-break in Firefox.
                wordWrap: 'break-word',
                // Proper calculation of this element's
                // clientHeight, offsetHeight, scrollHeight (Firefox).
                display: 'inline-block',
            },
            ...this.props.style,
        };

        return (
            <span
                className="truncate-wrapper"
                style={style}
                ref={r => {
                    this.longTextWrapper = r;
                }}
            >
                {this.props.children}
            </span>
        );
    }
}

export default ReactTruncate;
