import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Menu, MenuItem } from '@mui/material';

const options: string[] = ['del', 'none'];

export const BoardMenu = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={ open ? 'long-menu' : undefined }
        aria-expanded={ open ? 'true' : undefined } 
        aria-haspopup='true'
        onClick={ handleClick }
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={ anchorEl }
        open={ open }
        onClose={ handleClose }
        PaperProps={{
          style: {
            maxHeight: 20 * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={ option } selected={ option === 'del' } onClick={ handleClose }>
            { option }
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
