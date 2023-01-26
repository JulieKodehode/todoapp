// Libraries
import React, { useState, useEffect } from "react";

// Styles
import "./styles/styles.css";
import "./styles/colors.css";
import "./styles/typography.css";

// Assets
import Moon from "./images/icon-moon.svg";

// Components

const ToDoApp = () => {
	const [todo, setTodo] = useState([]);
	const [newTodo, setNewTodo] = useState("");

	const savedTodo = (newTodo) => {
		localStorage.setItem("todo", JSON.stringify(newTodo));
	};

	useEffect(() => {
		if (localStorage.getItem("todo")) {
			setTodo(JSON.parse(localStorage.getItem("todo")));
		}
	}, []);

	// Need to add an eventlistener to use enter instead of button
	const addTodo = () => {
		if (newTodo.trim()) {
			let newTodos = [...todo, { todo: newTodo, id: Date.now() }];
			setTodo(newTodos);
			setNewTodo("");
			savedTodo(newTodos);
		}
	};

	const deleteTodo = (id) => {
		let newTodos = todo.filter((todo) => todo.id !== id);
		setTodo(newTodos);
		savedTodo(newTodos);
	};

	return (
		<main className="todoMain">
			<section className="header">
				<h1>To do</h1>
				<button className="moonButton">
					<img src={Moon} alt="moon icon" />
				</button>
			</section>

			<section className="todoInput">
				<input
					className="input"
					type="text"
					placeholder="Create a new todo.."
					value={newTodo}
					onChange={(event) => setNewTodo(event.target.value)}
				/>
				<button onClick={addTodo}>Send</button>
			</section>

			<section className="todoInputList">
				<div>
					{todo.map((todo) => {
						return (
							<ul key={todo.id}>
								<li>
									{todo.todo} <button onClick={() => deleteTodo(todo.id)}>Delete</button>
								</li>
							</ul>
						);
					})}
				</div>

				<ul className="lilMenu">
					<li>Todos left</li>
					<li>All</li>
					<li>Active</li>
					<li>Completed</li>
					<li>Clear Completed</li>
				</ul>
				{/* <p>Drag and drop to reorder list</p> */}
			</section>
		</main>
	);
};

export default ToDoApp;
