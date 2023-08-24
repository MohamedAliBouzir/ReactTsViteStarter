import { ReactNode, forwardRef } from "react";
import PropTypes from 'prop-types'
import classNames from "classnames";

export interface IPageProps {
    children: ReactNode;
    className?: string;
    container?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' ;
}

const Page = forwardRef<HTMLDivElement, IPageProps>(({children, className, container, ...props}, ref) => {
  return (
    <div 
        ref={ref}
        className={classNames('page', className, {
            [`container${typeof container === 'string' ? `-${container}` : ''}`] : container,
        })}
        {...props}
        >
        {children}
    </div>
  )
}
);

Page.displayName = 'Page';
Page.propTypes = {
    children: PropTypes.node.isRequired,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    container: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf([null, 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid']),
    ]),
    className: PropTypes.string.isRequired,
};

export default Page
