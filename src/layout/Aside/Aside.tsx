import { ReactNode, FC } from "react"
import {motion} from 'framer-motion'

interface IAsideHeadProps{
    children: ReactNode,
}

export const AsideHead : FC<IAsideHeadProps> = ({children}) => {
    return(<div className='aside-head'>{children}</div>);
};

interface IAsideBodyProps{
    children: ReactNode,
}

export const AsideBody : FC<IAsideBodyProps> = ({children}) => {
    return(<div className='aside-body'>{children}</div>)
}

interface IAsideFootProps{
    children: ReactNode,
}

export const AsideFoot : FC<IAsideFootProps> = ({children}) => {
    return(<div className='aside-foot'>{children}</div>)
}

interface IAsideProps {
    children: ReactNode,
}

const Aside : FC<IAsideProps> = ({children}) => {
    return(
        <>
            <motion.div
                className='aside-touch'>
                aside
            </motion.div>
        </>
    )

}

export default Aside;
