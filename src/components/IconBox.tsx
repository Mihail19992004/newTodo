import React, { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useClasses = makeStyles(() => ({
  navlink: {
    position: 'relative',
    height: ' 68px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.2s ease-in-out',
    '&:hover , &:focus': {
      '& svg': {
        fill: '#050505',
      },
    },
    '& svg': {
      fill: '#ccccd7',
    },
  },
  active: {
    '& svg': {
      fill: '#050505 !important',
    },
    '&::after': {
      display: 'block',
      content: '""',
      backgroundColor: '#050505',
      height: '50%',
      width: '2px',
      left: '0%',
      top: '25%',
      position: 'absolute',
    },
  },
}))

interface IconBoxProps {
  type: string
  active: boolean
  children: ReactElement
}

export const IconBox: FC<IconBoxProps> = ({ children, type, active }): ReactElement => {

  const classes = useClasses()

  return (
    <Link className={ `${ classes.navlink } ${ active ? classes.active : null }`} to={ type }>
      { children }
    </Link>
  )
}
