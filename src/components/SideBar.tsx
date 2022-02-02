import React, { FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, makeStyles } from '@material-ui/core'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExtensionIcon from '@mui/icons-material/Extension'
import PeopleIcon from '@mui/icons-material/People'
import PollIcon from '@mui/icons-material/Poll'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { ReactComponent as ReactLogo } from '../assets/react-js.svg'
import { IconBox } from './IconBox'
import { NavProps } from '../features'
import { NotificationsBadge } from './NotificationsBadge'

const useStyle = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    borderRight: '2px solid #fafafb',
    width: ' 80px',
    alignItems: 'center',
    padding: '30px 0',
  },
  sideBarContent: {
    width: '100%',
  },
  linksSideBar: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  logo: {
    marginBottom: ' 15px',
    textAlign: 'center',
  },
}))

const mainNavigation: NavProps[] = [
  {
    name: 'notification',
    component: <NotificationsBadge />,
  },
  {
    name: 'boards',
    component: <DashboardIcon />,
  },
  {
    name: 'extentsions',
    component: <ExtensionIcon />,
  },
  {
    name: 'people',
    component: <PeopleIcon />,
  },
  {
    name: 'chart',
    component: <PollIcon />,
  },
  {
    name: 'settings',
    component: <SettingsIcon />,
  },
]

export const SideBar: FC = () => {

  const classes = useStyle()
  const { pathname } = useLocation()
  const activeTab = useMemo((): string => pathname.split('/')[1], [ pathname ])

  return (
    <Box className={ classes.container }>
      <Box className={ classes.sideBarContent }>
        <Box className={ classes.logo }>
          <ReactLogo width={ 50 } />
        </Box>
        <Box className={ classes.linksSideBar }>
          {mainNavigation.map((e) => (
            <IconBox key={ e.name } type={ e.name } active={ activeTab === e.name }>
              { e.component }
            </IconBox>
          ))}
        </Box>
      </Box>
      <AccountCircleIcon />
    </Box>
  )
}
