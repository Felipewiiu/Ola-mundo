import './post.css'

import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PosteModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import NaoEncontrada from 'paginas/NaoEncontrada/NaoEncontrada'
import PaginaPadrao from 'componentes/paginaPAdrao'

export default function Posts() {
  const parametros = useParams()

  const post = posts.find(post => {
    return post.id === Number(parametros.id)
  })

  if (!post) {
    return <NaoEncontrada />
  }


  return (

    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route index element={
          <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
          >

            <div className="post-markdown-container">
              <ReactMarkdown>
                {post.texto}

              </ReactMarkdown>
            </div>


          </PostModelo>
        } />
      </Route>
    </Routes>

  )
}
