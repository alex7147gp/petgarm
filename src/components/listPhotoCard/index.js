import React, { useState } from 'react'
import styled from 'styled-components'
import db from '../../../api/db.json'
import { PhotoCard } from '../photoCard'
import { useQuery, gql } from '@apollo/client'
import { MdOutlinePhotoSizeSelectLarge } from 'react-icons/md'

const List = styled.ul`
 margin: 5px;
 padding: 0;
`

const Item = styled.li`


`



const withPhotos = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const Photos = gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
 
export const ListPhotoComponent = ({ categoryId, isAuth }) => {

  const { loading: photoLoading, error: photoError, data: photoData } = useQuery(Photos)
 
  if (photoLoading) return <h1>Loading</h1>

  if (photoError) return <h1>Error</h1>
  
  return (
    <List>
      {
          photoData.photos.map(photo =>
            <PhotoCard key={photo.id} {...photo} isAuth={isAuth} />
          )
      }
    </List>
  )
}
