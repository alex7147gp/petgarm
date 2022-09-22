import  React from 'react'
import { gql, useMutation } from '@apollo/client' 

const getLike = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
        id,
        liked,
        likes
    }
}
`

export const ToggleLikeMutation = () => {
    const [ mutation, { loading: mutationLoading, error: mutationError } ] = useMutation(getLike)
    
    return (
        { mutation, mutationLoading, mutationError }
    )
}