import AddForm from "../components/AddForm";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../services/service.config";

function TodoList() {

  const navigate = useNavigate()

  const [ allTodos, setAllTodos ] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      
      // const response = await axios.get("http://localhost:5005/api/todo")
      const response = await service.get("/todo")
      console.log(response.data)
      setAllTodos(response.data)

    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }

  return (
    <div>
      <AddForm getData={getData} setAllTodos={setAllTodos}/>
      <br />
      <hr />
      <h3>Lista de To-Do</h3>

      {allTodos === undefined
      ? <h3>... buscando</h3>
      : allTodos.map((eachTodo) => {
        return (
          <div key={eachTodo._id}>
            <Link to={`/todo/${eachTodo._id}/details`}>{eachTodo.title}</Link>
          </div>
        )
      })
      }
    </div>
  );
}

export default TodoList;