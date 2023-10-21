import { FC, ReactNode } from "react";
import useDarkMode from "../../../hooks/useDarkMode";
import Header from "../../../layout/Header/Header";
import PropTypes from 'prop-types';
import Button, { IButtonProps } from "../../../components/Button";
import Icon from "../../../components/icon/Icon";


interface ICommonHeaderProps {
    beforeChildren?: ReactNode;
}
const CommonHeader: FC<ICommonHeaderProps> = ({beforeChildren}) => {
    const { darkModeStatus, setDarkModeSatus } = useDarkMode();
    const styleBtn: IButtonProps = {
        color: darkModeStatus ? 'dark' : 'light',
        hoverShadow: 'default',
        isLight: !darkModeStatus,
        size: 'lg',
    };

    return(
        <Header>
            <div className="row g-3">
                {beforeChildren}
            </div>
            <div className="col-auto">
                <Popovers trigger='hover' desc='Dark / Light mode'>
                    <Button
                        {...styleBtn}
                        onClick={()=>setDarkModeSatus(!darkModeStatus)}
                        className='btn-only-icon'
                        data-tour='dark-mode'>
                            <Icon 
                                icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
                                color={darkModeStatus ? 'info' : 'warning'}
                                className='btn-icon'
                            />
                        </Button>
                </Popovers>
            </div>
        </Header>
    );
};
CommonHeader.propTypes = {
    beforeChildren: PropTypes.node,
}

CommonHeader.defaultProps = {
    beforeChildren: null,
}

export default CommonHeader;