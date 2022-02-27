import React, { FC } from 'react';
import { Avatar, Box, Typography } from '@material-ui/core';
import { useClasses } from './ModalProfile.style';
import { ProfileProps } from '../Modalstatus/Modalstatus';

export interface ProfileProp {
  profile : ProfileProps
}

export const ModalProfile : FC <ProfileProp> = ( { profile } ) => {

  const { image, name, surname } = profile;

  const classes = useClasses();
  return (
    <Box className={classes.boxProfile}>
      <Avatar className={classes.img} alt="avatar" src={`${image}`} />
      <Typography className={classes.parProfile}>{`${name} ${surname}`}</Typography>
    </Box>
  );
};
