import styles from './MenuLink.module.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuLink({children, to}) {

    // const localizacao = useLocation()
    // console.log (localizacao)

    return (
        <NavLink
        className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.linkDestacado : ""}
        `}
        to={to}
        end
    >
        {children}
    </NavLink>
    )
}
