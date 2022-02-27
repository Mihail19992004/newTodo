import { Box } from '@material-ui/core';
import React, { FC, useMemo } from 'react';
import { useClasses } from './StatusPanel.style';
import CircleIcon from '@mui/icons-material/Circle';

interface StatusProp {
  status : string
}
export const StatusPanel :FC <StatusProp> = ({ status }) => {

  const classes = useClasses();
  const statusInfo = useMemo((): string => status.replace(/\s/g, ''), [status]);

  return (
    <Box className={`${classes.statusFlex} ${statusInfo == 'complete' ? classes.complete : statusInfo == 'create' ? classes.create : classes.inprogres}`}>
      <CircleIcon width='10px'/>
      <p className={classes.labelStatus}>{status}</p>
    </Box>
  );
};
