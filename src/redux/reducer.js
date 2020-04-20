import { createStore } from 'redux'
export const addTodoAction = (text) => ({
    type: 'ADD_TODO',
    id: Date.now(),
    value: text
})

const initState = {
    todoList: [{
        id: '123',
        value: 'one task'
    }]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'addTodo':
            return {
                todoList: [...state.todoList, {
                    id: action.id,
                    value: action.value
                }]

            }
        default:
            return state
    }
}

export const store = createStore(reducer)