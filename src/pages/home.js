import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListCategory } from '../components/list-Category'
import { ListPhotoComponent } from '../components/listPhotoCard'
import { Helmet } from "react-helmet"
import { Layaut } from '../components/layaut'

const HomePage = ({ isAuth }) => {

  return (
    <>
      <Helmet>
        <title>Tu app de fotos de mascotas | Petgram</title>
        <meta name="description" content="Con Petgram puedes encontrar fotos de animales domesticos muy bonitos" />
      </Helmet>
      <ListCategory />
      <ListPhotoComponent isAuth={isAuth} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
