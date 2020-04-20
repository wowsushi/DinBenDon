import React, { FC, useState } from 'react'
import { connect } from 'react-redux'
import { addTodoAction } from 'redux/reducer'

const AddNew: FC<any> = (props) => {
    // const [todoList, setTodoList] = useState([])
    const [data, setData] = useState()
    const handleChange = (e) => {
        setData(e.target.value)
    }

    return (
        <section className="container add-new-container">
            <h1>AddNew</h1>
            <input onChange={handleChange}></input>
            <button onClick={() => props.addTodo(data)}>add one</button>
            <ul>
                {props.todoList.map(v => {
                    return <li key={v.id}>{v.value}</li>
                })}

            </ul>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (value) => dispatch(addTodoAction(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddNew)