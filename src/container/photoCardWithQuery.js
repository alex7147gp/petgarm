import React from 'react'
import { PhotoCard } from '../components/photoCard'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'
import { Query } from '@apollo/client'

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked       
    }
  }
`
const Ul = styled.ul`
  margin: 5px;
  padding: 0;
`

export const PhotoCardWithQuery = ({ id }) => {
    const { loading, error, data } = useQuery(query, { variables: { id } })

    if (loading) return <h1>Loading</h1>

    if (error) {
      console.log(error)
      return <h1>Error</h1>
    }
    
    const { photo = {} } = data 

    return(
      <Ul>
            <PhotoCard key={photo.id} {...photo} />
      </Ul>
  )
}
