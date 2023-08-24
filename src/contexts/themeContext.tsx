import { FC, ReactNode, createContext, useLayoutEffect, useMemo, useState } from "react";
import PropTypes from 'prop-types';

export interface IThemeContextProps{
    darkModeStatus: boolean;
    fullScreenStatus: boolean;
    setDarkModeStatus: (value: ((prevState: boolean) => boolean) | boolean) => void;
	setFullScreenStatus: (value: ((prevState: boolean) => boolean) | boolean) => void;
}
const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps)

interface IThemeContextProviderProps{
    children: ReactNode;
}

export const ThemeContextProvider : FC<IThemeContextProviderProps> = ({children}) => {
    const [darkModeStatus, setDarkModeStatus] = useState(
		localStorage.getItem('Kanban_darkModeStatus')
			? localStorage.getItem('Kanban_darkModeStatus') === 'true'
			: import.meta.env.REACT_APP_DARK_MODE === 'true',
	);

    useLayoutEffect(() => {
        localStorage.setItem('Kanban_darkModeStatus', darkModeStatus.toString());
    }, [darkModeStatus])

    const [fullScreenStatus, setFullScreenStatus] = useState(false)

    const values: IThemeContextProps = useMemo(() => ({
        darkModeStatus,
        setDarkModeStatus,
        fullScreenStatus,
        setFullScreenStatus
    }), [darkModeStatus, fullScreenStatus]);

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
};
ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContext;