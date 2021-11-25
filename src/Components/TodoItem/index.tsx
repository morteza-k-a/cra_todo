import { Paper } from '@mui/material'
import React from 'react'
import './styles.css'
import {TodoItemControls} from '../'
export function TodoItem(props:{text:string}) {
    return (
        <Paper className={'todoItem'}>
            {props.text}
            <TodoItemControls/>
            </Paper>
    )
}
