import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@material-ui/core';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { useClasses } from './ModalStatus.style';
import { StatusPanel } from '../StatusPanel/StatusPanel';
import { ModalProfile } from '../ModalProfile/ModalProfile';
import { ModalDate } from '../ModalDate/ModalDate';

const array = [
  { label: 'high', value: '#d73734c7', fill : '#b92d88' },
  { label: 'middle', value: '#dcf748c2', fill : '#a6bd29' },
  { label: 'simply', value: '#7bdf7fd1', fill : '#298b2d' },
];

export interface ProfileProps {
  image : string 
  name : string
  surname : string
}
const profile : ProfileProps = {
  image : 'https://mui.com/static/images/avatar/1.jpg',
  name : 'Михаил',
  surname : 'Камбулов',
};
export const ModalStatus = () => {

  const classes = useClasses();
  return (
    <Box className={classes.statusPanel}>
      <Box className={classes.filter}>
        <Typography className={classes.labelText}>Status</Typography>
        <StatusPanel  status='create' />
      </Box>
      <Box className={classes.filter}>
        <Typography className={classes.labelText}>Priority</Typography>
        <CustomSelect items={array} />
      </Box>
      <Box className={classes.filter}>
        <Typography className={classes.labelText}>Assignee</Typography>
        <ModalProfile profile={profile}/>
      </Box>
      <Box className={classes.filter}>
        <Typography className={classes.labelText}>Due Date</Typography>
        <ModalDate />
      </Box>
    </Box>
  );
};
