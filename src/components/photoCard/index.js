import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { fadeIn } from '../../styles/animation'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLikeMutation } from '../../container/toggleLikeMutation'
import context from '../../context'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from "prop-types"

const imgs = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'
const Article = styled.article` 
  min-height: 200px; 
`

const ImgWraper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

const Boton = styled.button`setCategoriesId
  padding-top: 8px;
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
const Margen = styled.div`
  height: 10px;
  margin: 5px;
`

export const PhotoCard = ({ id, liked, likes = 0, src, iten, isAuth }) => {
  const key = `like-${id}`
  const [show, ref] = useNearScreen()
  const Icon = liked ? MdFavorite : AiOutlineHeart
  const Image = src !== 'undefined' ? src : imgs
  const { mutation, mutationLoading, mutationError } = ToggleLikeMutation()
  const handleClickTrue = () => {
    if (mutationLoading) return console.log('loading')
    if (mutationError) return console.log(mutationError)
    mutation({ variables: { input: { id } } })
  }

  const handleClickFalse = () => {
    console.log('Inicia secion para indicar que esta publicacion te gusta')
  }
  const location = useLocation()
  return (

        <Article ref={ref}>
          {
            show && <>
              <Link
                to={`/detail/${id}`}
                underline="hover"
              >
                <ImgWraper>
                  <Img src={src} />
                </ImgWraper>
              </Link>
              {
                location.pathname === '/' && isAuth ? <Boton onClick={() => handleClickTrue()} liked={liked}>
                  <Icon size='32px' />{likes}, likes
                </Boton>
                : <Margen />
              }
            </>
          }
        </Article>

  )
}

PhotoCard.apply.propTypes = {
  id: PropTypes.string,
  liked: PropTypes.any.bool,
  src: PropTypes.string,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
