import classNames from "classnames";
import { FC, ReactElement, ReactNode, useContext, useLayoutEffect } from "react";
import PropTypes from 'prop-types';
import useDarkMode from "../../hooks/useDarkMode";
import { useMeasure, useWindowSize } from "react-use";
import ThemeContext from "../../contexts/themeContext";


interface IHeaderLeftProps {
    children: ReactNode;
    className?: string;
}

export const HeaderLeft: FC<IHeaderLeftProps> = ({children, className}) => {
    return <div className={classNames('header-left', 'col-md', className)}>{children}</div>
}

HeaderLeft.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

HeaderLeft.defaultProps = {
    className: undefined,
}

interface IHeaderProps {
    children: ReactElement<IHeaderLeftProps> | ReactNode;
}

const Header: FC<IHeaderProps> = ({children}) => {
    const { themeStatus } = useDarkMode();
    const windowsWidth = useWindowSize().width;
    const [refHeader, sizeHeader] = useMeasure<HTMLDivElement>();
    const root = document.documentElement;
    root.style.setProperty('--header-height', `${sizeHeader.height}px`);
    const {leftMenuStatus, setLeftMenuStatus} = useContext(ThemeContext);
    useLayoutEffect(()=> {
        if(leftMenuStatus)
            document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    });

    return (
        <header
            ref={refHeader}
            className={classNames('header')}
            >
            <div className="row d-flex align-items-center">
                {children}
            </div>
        </header>
    );
};
Header.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Header;