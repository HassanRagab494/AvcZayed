import Naavaar from 'combnits/nav/Navaar'
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <Fragment>
      <Naavaar/>
      <main>
        <Outlet/>
      </main>
      
    </Fragment>
  )
}

export default Root