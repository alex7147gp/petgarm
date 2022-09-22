import React from 'react'
import { PhotoCardWithQuery } from '../container/photoCardWithQuery'
import { Layaut } from '../components/layaut'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  
  const params = useParams()

  const id = params.detailId

  return (
    <Layaut title={`Fotografia ${id}`}>
      <PhotoCardWithQuery id={id} />
    </Layaut>
  )
}
