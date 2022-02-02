import { Box, Tabs } from '@material-ui/core'
import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NavigationBoard = () => {

  const { pathname } = useLocation()
  const activeLink = useMemo(() => pathname.split('/')[2], [ pathname ])
  const [ active, setactive ] = useState(0)

  useEffect(() => {
    setactive(2)
  }, [ activeLink ])

  return (
    <Box>
      <Tabs
        value={ active }
        onChange={ () => setactive(1) }
        variant='scrollable'
        scrollButtons={ 'desktop' }
        aria-label='scrollable prevent tabs example'
      ></Tabs>
    </Box>
  )
}
