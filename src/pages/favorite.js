import React from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { PhotoCard } from "../components/photoCard"
import { favoriteMutation } from "../container/favoriteMutation"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Layaut } from "../components/layaut"
import PropTypes from "prop-types"

const Links = styled(Link)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

`

const Grid = styled.div`
  padding-top: 32px;
`

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`

export const Favorite = () => {
    const { data, loading, error } = favoriteMutation()

    if (loading) return <h1>Loading</h1>

    if (error) return <h1>Error</h1>

    return (
      <Layaut title="Tus favoritos">
        {
          data.favs.length > 0 ? <Grid>
              {
                data.favs.map(photo => 
                  <Links to={`/detail/${photo.id}`} key={photo.id} >  
                    <Image key={photo.id} {... photo} src={photo.src} />
                  </Links>
                )
              }
          </Grid>
          : <h1>No tienes favoritos</h1>
        }
      </Layaut>
    )
}
Favorite.propTypes = {
  data: PropTypes.array
}
