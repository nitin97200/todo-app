import React, { useState } from "react";

const TodoApp = () => {
    const [inputValue, setInputValue] = useState("")

    const [arr, setArr] = useState([])
    console.log(arr)
    return (
        <div>
            <h1>Todo App</h1>
            <div className="form-main">
                <label className="form-label" htmlFor="">Enter your today task</label>
                <div className="input-main">
                    <input value={inputValue}
                        className="form-input"
                        type="text"
                        onChange={(e) => {
                            // console.log(e.target.value)
                            setInputValue(e.target.value)
                        }} />
                    <button
                        type="button"
                        onClick={() => {
                            console.log("clicked")
                            setArr([...arr, inputValue])
                            setInputValue("")
                        }}>+</button>
                </div>
                {
                    arr.map((name) => {
                        console.log(name);

                        return (
                            <div className="task-list">
                                <p>{name}</p>
                                <button onClick={() => {
                                    console.log("delete data")
                                    // i == arr
                                    // item == arr elemnts
                                    setArr((i) => i.filter((item) => item !== name))

                                }}>delete</button>
                                <button onClick={() => {
                                    console.log("Edit data")
                                    setInputValue(name)
                                }}>Edit</button>

                            </div>
                        )
                    }

                    )
                }
                {
                    arr.length > 0 ? <button onClick={() => {
                        setArr([])
                    }}>
                        Delete all
                    </button> : null
                }

            </div>
        </div>
        
    )
}

export default TodoApp;