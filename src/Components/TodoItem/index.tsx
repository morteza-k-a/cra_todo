import { Paper } from '@mui/material'
import React from 'react'
import './styles.css'
import {TodoItemControls} from '../'
export function TodoItem() {
    return (
        <Paper className={'todoItem'}>
            text
            <TodoItemControls/>
            </Paper>
    )
}
