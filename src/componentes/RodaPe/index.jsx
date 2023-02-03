import styles from './rodaPe.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

import React from 'react'

export default function RodaPe() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada/>
        Desenvolvido por Felipe oliveira
    </footer>
  )
}
