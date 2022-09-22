import { gql, useQuery } from "@apollo/client";

const FavoriteM = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }  
`

export const favoriteMutation = () => {
  const { data, loading, error } = useQuery(FavoriteM, { fetchPolicy: 'cache-and-network' })
  console.log(data)

  return { data, loading, error }

}