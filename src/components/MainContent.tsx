import React, { FC } from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    flex: '1',
  },
}))

const MainContent: FC = () => {
  const classes = useStyle()
  return <Box className={classes.mainContainer}></Box>
}

export default MainContent
