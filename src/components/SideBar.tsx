import React, { FC, useMemo } from 'react'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Box, makeStyles } from '@material-ui/core'
import NotificationsIcon from '@mui/icons-material/Notifications'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import PeopleIcon from '@mui/icons-material/People'
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PollIcon from '@mui/icons-material/Poll'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
const useStyle = makeStyles((theme) => ({
  sbContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    '& svg': {
      fill: 'grey',
      cursor: 'pointer',
      padding: '15px 25px',
      '&:hover, &:focus': {
        fill: 'black',
      },
    },
  },
  active: {
    fill: 'black !important',
    borderLeft: '1px solid black',
  },
  linksSideBar: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const SideBar: FC = () => {
  const classes = useStyle()
  const { pathname } = useLocation()
  const activeTab = useMemo((): string => pathname.split('/')[1], [pathname])
  console.log(`${pathname} , ${activeTab}`)
  return (
    <Box className={classes.sbContainer}>
      <Box className={classes.linksSideBar}>
        <Box></Box>
        <Link to='Notification'>
          <NotificationsIcon
            className={`${'Notification' === activeTab ? classes.active : null}`}
          />
        </Link>
        <Link to='Dashboard'>
          <DashboardIcon className={`${'Dashboard' === activeTab ? classes.active : null}`} />
        </Link>
        <Link to='ColorLens'>
          <ColorLensIcon className={`${'ColorLens' === activeTab ? classes.active : null}`} />
        </Link>
        <Link to='People'>
          <PeopleIcon className={`${'People' === activeTab ? classes.active : null}`} />
        </Link>
        <Link to='Poll'>
          <PollIcon className={`${'Poll' === activeTab ? classes.active : null}`} />
        </Link>
        <Link to='Settings'>
          <SettingsIcon className={`${'Settings' === activeTab ? classes.active : null}`} />
        </Link>
      </Box>
      <AccountCircleIcon />
    </Box>
  )
}

export default SideBar
