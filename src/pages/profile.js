import React from "react"
import Context from "../context"


export const Profile = () => {
  
  return (
    <Context.Consumer>
    {
      ({ removeAuth }) => {
        return (
          <>
            <h1>User</h1>
            <button onClick={removeAuth}>cerrar secion</button>
          </>
        )
      } 
    }
    </Context.Consumer>
  )
}
