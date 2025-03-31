import React from "react";
import { TextProps } from "./types";

const TextComponent = (props: TextProps): JSX.Element => {
    const {
        tag = 'p',
        id,
        weight = '400',
        size = 'default',
        color = 'black',
        type = 'text',
        transform = 'none',
        className,
        children,
        dataWowDelay
    } = props;

    const getType = () => {
        const classes = [];
        switch (type) {
            case 'text':
                classes.push('text');
                break;
            case 'title':
                classes.push('title');
                break;
            case 'subtitle':
                classes.push('subtitle');
                break;
        }
        return classes;
    };

    const getSize = () => {
        const classes = [];
        switch (size) {
            case 'small':
                classes.push('text--small');
                break;
            case 'x-small':
                classes.push('text--x-small');
                break;
            case 'default':
                classes.push('text--default');
                break;
            case 'middle-large':
                classes.push('text--middle-large');
                break;
            case 'medium':
                classes.push('text--medium');
                break;
            case 'middle':
                classes.push('text--middle');
                break;
            case 'big':
                classes.push('text--big');
                break;
            case 'x-big':
                classes.push('text--x-big');
                break;
            case 'xl-big':
                classes.push('text--xl-big');
            case 'mob-xl-big':
                classes.push('text--mob-xl-big');
                break;
            case 'large':
                classes.push('text--large');
                break;
            case 'x-large':
                classes.push('text--x-large');
                break;
            case 'title':
                classes.push('text--title');
                break;
            case 'subtitle':
                classes.push('text--subtitle');
                break;
            default:
                break;
        }
        return classes;
    };
    const getWeight = () => {
        const classes = [];
        switch (weight) {
            case '100':
                classes.push('font--100');
                break;
            case '200':
                classes.push('font--200');
                break;
            case '300':
                classes.push('font--300');
                break;
            case '400':
                classes.push('font--400');
                break;
            case '500':
                classes.push('font--500');
                break;
            case '600':
                classes.push('font--600');
                break;
            case '700':
                classes.push('font--700');
                break;
            case '800':
                classes.push('font--800');
                break;
            default:
                break;
        }
        return classes;
    };

    const getColors = () => {
        const classes = [];
        switch (color) {
            case 'black':
                classes.push('color--black');
                break;
            case 'white':
                classes.push('color--white');
                break;
            default:
                classes.push(color);
                break;
        }
        return classes;
    };
    const getTextTransform = () => {
        const classes = [];
        switch (transform) {
            case 'uppercase':
                classes.push('font--uppercase');
                break;
            case 'lowercase':
                classes.push('font--lowercase');
                break;
            case 'capitalize':
                classes.push('font--capitalize');
                break;
            default:
                break;
        }
        return classes;
    };

    const setDefaultTextClasses = () => {
        return [
            ...getSize(),
            ...getWeight(),
            ...getColors(),
            ...getTextTransform(),
            ...getType(),
            className
        ].join(' ');
    };

    return React.createElement(
        tag,
        { className: setDefaultTextClasses(), 'id': id, ...(dataWowDelay ? { 'data-wow-delay': dataWowDelay } : {}) },
        children
    );
};

export default TextComponent;
