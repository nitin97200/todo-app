import React, { useState } from "react";

const TodoPractice = () => {
    const [inputValue, setInputValue] = useState("")
    const [data, setData] = useState([])
    const ValueChage = (e) => {
        setInputValue(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className="todo-main">
            <h1>Todo New</h1>
            <label htmlFor="">Enter Your Task</label>
            <div className="input-main">
                <input value={inputValue} type="text" onChange={ValueChage} />
                <button
                    onClick={() => {
                        setData([...data, inputValue])
                        setInputValue("")
                    }}
                >+</button>
            </div>
            {
                data.map((i) => {
                    return (
                        <p>
                            {i}
                        </p>
                    )

                })
            }
        </div>
    )
}

export default TodoPractice;