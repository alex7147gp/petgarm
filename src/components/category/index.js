import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'


const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Anchor = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50px;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
 
`

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?', id }) => {
 
  return (
    <Anchor
      to={path}
      underline="hover"
    >
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}
