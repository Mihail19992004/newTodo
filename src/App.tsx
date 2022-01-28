import React, { FC } from 'react'
import { Box, makeStyles } from '@material-ui/core'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'

const useStyle = makeStyles((theme) => ({
  App: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
  },
}))

const App: FC = () => {
  const classes = useStyle()
  return (
    <Box className={classes.App}>
      <SideBar />
      <MainContent />
    </Box>
  )
}

export default App
