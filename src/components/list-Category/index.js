import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../category'
import db from '../../../api/db.json'
import { bounceDown } from '../../styles/animation'
import styled, { css } from 'styled-components'

const List = styled.ul`
  display: flex;
  margin: 5px;
  padding: 0;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${props => props.fixed && css`
    {
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      z-index: 1;
      transform: scale(.5);      
    ${ bounceDown }
  }  
  `}
`;


const Item = styled.li`
  padding: 0 8px;
`;


const useCategoriesData = () => {

const [categorie, setCategorie ] = useState([]);
const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-jcc.vercel.app/categories')
    .then(res => res.json())
    .then(response => setCategorie(response))
    setLoading(false)
  }, [])

  return { categorie, loading }

};

  const ListOfCategory = ({ setCategoriesId }) => {

  const { categorie, loading } = useCategoriesData();

  const [showFixed, setShowFixed] = useState(false);
  
  useEffect(() => {
    const onScroll = e =>{
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    }

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])



  const renderList = (fixed) => {
        return(
          <List fixed={fixed}>
            {
              loading 
              ? <Item key='loading'>
                 <Category/>
              </Item>
              :
              categorie.map(category => 
              <Item key={category.id}>
                  <Category setCategoriesId={setCategoriesId}
                  key={category.id}
                  {...category}
                  path={`/pet/${category.id}`}       
                  />
              </Item>)
            }
          </List>
        )
  } 

    return (
       <>
         {renderList()}
         {showFixed && renderList(true)} 
       </>
    )
}

export const ListCategory = React.memo(ListOfCategory)
