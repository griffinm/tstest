import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

interface FormProps {
  onCreateItem: (title: string) => void;
}

export default function Form({ onCreateItem }: FormProps) {
  const [todoTitle, setTodoTitle] = useState('')

  function handleAddTodoClick() {
    if (todoTitle) {
      onCreateItem(todoTitle)
      setTodoTitle('')
    }
  }

  return (
    <div className="form">
      <div className="form__input">
        <TextField
          onChange={e => setTodoTitle(e.target.value)}
          value={todoTitle}
          label="New Todo Item"
        />
      </div>
      <Button
        variant="contained"
        disabled={!todoTitle}      
        onClick={handleAddTodoClick}
      >
        Add Item
      </Button>
    </div>
  )
}
