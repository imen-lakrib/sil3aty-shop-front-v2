import { Box, Typography } from '@mui/material'
import React from 'react'
import Flex from './Flex'

interface CustomTitleProps {
    title1?: string;
    title2: string;

  }
const CustomTitle:  React.FC<CustomTitleProps> = ({title1, title2 }) => {
  return (
    <Flex>
        <Typography variant='h3' sx={{color:"secondary.light"}}>{title1} <span style={{color:"#94a2af"}}>{title2}</span></Typography>

    </Flex>
  )
}

export default CustomTitle