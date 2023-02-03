import React from 'react'
import MenuLink from '../MenuLink/indexx'
import styles from "./Menu.module.css"

export default function Menu() {

  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink to="/">
                Início
            </MenuLink>
            <MenuLink to="/Sobremim">
                Sobre Mim
            </MenuLink>
        </nav>
    </header>
  )
}
