import React, { useState } from 'react'
import styled from 'styled-components'
import db from './../../api/db.json'
import { PhotoCard } from '../components/photoCard'
import { useQuery, gql } from '@apollo/client'
import { MdOutlinePhotoSizeSelectLarge } from 'react-icons/md'
import { useLocation, useParams } from 'react-router-dom'

const List = styled.ul`
  margin: 5px;
  padding: 0;
`

const Item = styled.li`


`






const withPhotos = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const CategoryPet = () => {
  
  const params = useParams()
  const categoryId = parseInt(params.id)
  const { loading, error, data } = useQuery(withPhotos, { variables: { categoryId } })

  if (loading) return <h1>Loading</h1>

  if (error) return <h1>Error</h1>

  return (
    <List>
      {
          data.photos.map(photo =>
            <PhotoCard key={photo.id} {...photo} />
          )
      }
    </List>
  )
}
