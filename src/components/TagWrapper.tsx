import { ElementType, HTMLAttributes, ReactNode, forwardRef } from "react";
import PropTypes from 'prop-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ITagWrapper extends Record<string, any>, HTMLAttributes<HTMLElement> {
    children: ReactNode;
    tag: ElementType;
}

const TagWrapper = forwardRef<HTMLDivElement | HTMLAnchorElement |HTMLFormElement, ITagWrapper>(({tag: Tag, children, ...props}, ref) => {
    return(
        <Tag ref={ref} {...props}>
            {children}
        </Tag>
    )
})
TagWrapper.displayName = 'TagWrapper';
TagWrapper.propTypes = {
    tag: PropTypes.string,
    children: PropTypes.node.isRequired,
};
TagWrapper.defaultProps = {
    tag: 'div',
};

export default TagWrapper;