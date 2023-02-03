import React from 'react'

import styles from './inicio.module.css'
import posts from 'json/posts.json'
import PostCard from 'componentes/PostCards'

export default function Inicio() {
  return (

     <ul className={styles.posts}>
        {posts.map(post => {
          return (
            <li key ={post.id}>
              <PostCard post={post}/>
            </li>
          )
        })}
     </ul>

  )
}
