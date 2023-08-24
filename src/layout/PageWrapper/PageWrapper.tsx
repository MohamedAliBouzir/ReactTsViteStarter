import { ReactElement, forwardRef, useLayoutEffect } from "react";
import PropTypes from 'prop-types';
import { IPageProps } from "../Page/Page";
import classNames from "classnames";


interface IPageWrapperProps {
    title?: string;
    description?: string;
    children: 
            | ReactElement<IPageProps>
            | ReactElement<IPageProps>[];
    className?: string;
}

const PageWrapper = forwardRef<HTMLDivElement, IPageWrapperProps>(
    ({title, description, children, className}, ref) => {
        useLayoutEffect(()=> {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            document.getElementsByTagName('TITLE')[0].text = `${title ? `${title} | ` : ''}${
				import.meta.env.REACT_APP_SITE_NAME
			}`;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            document
				?.querySelector('meta[name="description"]')
				.setAttribute('content', description || import.meta.env.REACT_APP_META_DESC || '');
        });
        return (
			<div ref={ref} className={classNames('page-wrapper', 'container-fluid', className)}>
				{children}
			</div>
		);
    },
);

PageWrapper.displayName = 'PageWrapper';
PageWrapper.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
PageWrapper.defaultProps = {
    title: undefined,
    description: undefined,
    className: undefined,
};

export default PageWrapper;