import {ReactNode} from "react";
import './Header.scss'
type Props = {
    children: ReactNode
}
export const Header = ({children}: Props) => {
    return (
        <header className={'cv-header'}>
            <h1>{children}</h1>
        </header>
    )
}