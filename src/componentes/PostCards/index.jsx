import styles from './post.module.css'

import React from 'react'
import { Link } from 'react-router-dom'
import BotaoPrincipal from 'componentes/BotaoPrincipal/BotaoPrincipal'

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      
      <div className={styles.post}>
        <img className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal>
          Ler
        </BotaoPrincipal>

      </div>
    </Link>
  )
}
