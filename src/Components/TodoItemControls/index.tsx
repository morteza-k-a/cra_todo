import React from 'react'
import { IconButton } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

export function TodoItemControls() {
    return (
        <div>
            <IconButton aria-label={'edit'}>
                <ModeEditOutlineOutlinedIcon/>
            </IconButton>
            <IconButton aria-label={'delete'}>
                <DeleteOutlineOutlinedIcon/>
            </IconButton>
        </div>
    )
}
