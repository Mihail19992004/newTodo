import React, { FC, useState } from 'react';
import { Box, FormControl,  MenuItem, SelectProps } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// @ts-ignore
import CircleIcon from '@mui/icons-material/Circle';
import { useClasses } from './CustomSelect.style';

export interface ArayProp {
  label: string
  value: string
  fill : string
}

export interface SelectsProps extends SelectProps {
  items: ArayProp[]
}

export const CustomSelect: FC<SelectsProps> = ( { items } ) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  const classes = useClasses();

  return (
    <Box sx={ { minWidth: 123 } }>
      <FormControl variant='standard' fullWidth>
        <Select
          size='small'
          value={ value }
          defaultValue={ items[0].value }
          onChange={ handleChange }
          style={ { background: value } }
          className={ classes.select }
        >
          {items.map((item) => (
            <MenuItem value={ item.value } style={ { background: item.value } } >
              <Box className={ classes.options } >
                <CircleIcon style={ { fill: item.fill, width : '8px' } }  />
                <p className={ classes.name }>{ item.label }</p>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
