import Link from "next/link";

import style from '../../../styles/header.module.css'

const Header = () => {
    return (
        <>
            <div className={style.header}>
            <h1>
                LOGO
            </h1>
            <Link href='/login'>
                <strong className={style.login}>
                Login
                </strong>
            </Link>
            </div>
        </>
    )
}

export default Header;