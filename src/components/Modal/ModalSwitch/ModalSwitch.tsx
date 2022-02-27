import React, { FC, useState } from 'react';
import { Switch } from '@material-ui/core';


export const ModalSwitch : FC = () => {
  
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      color='primary'
    />
  );
};
