import React, { useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import todoStore from '../../stores/Todo/Todo';
import { useClasses } from './BoardTask.style';

export const BoardTasks = observer(() => {
    
  const classes = useClasses();
  const { elements, getElements } = todoStore;

  useEffect(() => {
    getElements();
  }, [getElements]);
  
  return (
        <Box className={ classes.container }>
            {
                elements.map((todo) => (
                    <Box className={ classes.element }>
                      <Typography variant='h6'>
                        {todo.title}
                      </Typography>
                    </Box>
                ))
            }
        </Box>
  );
});