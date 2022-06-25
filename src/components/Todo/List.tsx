import React, { useState } from "react";
import List from '@mui/material/List'

import Form from './Form'
import TodoItem from './Item'

import { TodoItemInterface } from './../../types'

export default function TodoList() {
  const [todoList, setTodoList] = useState<TodoItemInterface[]>([])

  function getNextId() : number {
    if (!todoList[0]) {
      return 0
    }

    return Math.max(...todoList.map(i => i.id)) + 1
  }

  function handleCreateItem(title: string) : void {
    const newTodoItem : TodoItemInterface = {
      completed: false,
      title: title,
      id: getNextId(),
    }
    setTodoList([newTodoItem, ...todoList])
  }

  function handleCompleteItem(id: number) : void {
    const itemToUpdate : TodoItemInterface | undefined = todoList.find(i => i.id === id)

    if(itemToUpdate) {
      itemToUpdate.completed = !itemToUpdate.completed

      const newTodoList : TodoItemInterface[] = todoList.map(i => {
        if (i.id === id) {
          return itemToUpdate
        }
        return i
      })

      setTodoList(newTodoList)
    }
  }

  return (
    <div className="todoList">
      <div className="stats">
        <h2>Remaining Items: {todoList.filter(i => !i.completed).length}</h2>
        <h2>Finished: {todoList.filter(i => i.completed).length}</h2>
      </div>
      <Form onCreateItem={handleCreateItem} />
      <List dense>
        {todoList.map(item =>
          <TodoItem
            todoItem={item} key={item.id}
            onCompleteItem={handleCompleteItem}
          /> 
        )}
      </List>
    </div>
  )
}
