import React, { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, makeStyles } from '@material-ui/core';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PeopleIcon from '@mui/icons-material/People';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PollIcon from '@mui/icons-material/Poll';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconBox } from './IconBox';
import modalStore from './Modal/ModalStore';
import { AuthModal } from './Modal/AuthModal/AuthModal';

const useStyle = makeStyles(() => ({
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
}));

const SideBar: FC = () => {

  const classes = useStyle();
  const { pathname } = useLocation();
  const activeTab = useMemo((): string => pathname.split('/')[1], [pathname]);
  const { createModal } = modalStore;

  return (
    <Box className={classes.sbContainer}>
      <Box className={classes.linksSideBar}>
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
          <IconBox type='Poll'>
            <PollIcon />
          </IconBox>
        </Link>
        <Link to='Settings'>
          <IconBox type='Settings'>
            <SettingsIcon />
          </IconBox>
        </Link>
      </Box>
      <AccountCircleIcon onClick={() => createModal(<AuthModal />, 'test')} />
    </Box>
  );
};

export default SideBar;
