import { useState } from "react";

function Todo(){
    const[todo , setTodo] = useState(
        ["Préparer le dîner",
         "Faire les devoirs",
         "Acheter du pain"]
    )

    const[task, setTask] = useState("")
     
    
    const addTodo = () => {
        if(task.trim() === "") return;
        setTodo([...todo, task])
        setTask("")
    }

    const removeTask = (indexToRemove) => {
        setTodo(todo.filter((_, index)=> index !== indexToRemove))
    }


    return (
        <>
        <h1>Todo Liste</h1>
        <ul>
            {todo.map((item,index) =>
            <li key={index}>{item}   
           <button onClick={() => removeTask(index)}>Supprimer</button>  
            </li>)}
        </ul>
        
        <input 
        type="text"
        placeholder="Entrer une tâche"
        onChange={e => setTask(e.target.value)}/>
        <button onClick={addTodo}>Ajouter</button>
        </>
    );
}

export default Todo;