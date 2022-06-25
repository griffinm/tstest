import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox';

import { TodoItemInterface } from './../../types'

interface ItemProps {
  todoItem: TodoItemInterface;
  onCompleteItem: (id: number) => void;
}

export default function TodoItem({ todoItem, onCompleteItem }: ItemProps) {
  return (
    <>
      <ListItem
        secondaryAction={
          <Checkbox
            edge="end"
            checked={todoItem.completed}
            onClick={() => onCompleteItem(todoItem.id)}
          />
        }
      >
        <ListItemText primary={todoItem.title} />
      </ListItem>
      <Divider />
    </>
  )
}
