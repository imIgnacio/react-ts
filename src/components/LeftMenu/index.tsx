import React from 'react'
import { Drawer } from '@mui/material'

function LeftMenu(props: any) {
  return (
    <Drawer open={props.open} />
  )
}

export default LeftMenu