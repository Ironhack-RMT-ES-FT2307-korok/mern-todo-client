import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import service from "../services/service.config";

function TodoDetails() {

  const [ details, setDetails ] = useState()
  // recomendado usar los estados isLoading o isFetching

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      // const response = await axios.get(`http://localhost:5005/api/todo/${params.id}`)
      const response = await service.get(`/todo/${params.id}`)
      console.log(response)
      setDetails(response.data)

    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }

  const handleDelete = async () => {
    try {
      
      await service.delete(`/todo/${params.id}`)
      navigate("/todo")

    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }

  if (details === undefined) {
    return <h3>...buscando</h3>
  }

  return (
    <div>
      <h3>Detalles de To-Do</h3>

      <div>
        <h3>{details.title}</h3>
        <p>{details.description}</p>
        <p>Es urgente: {details.isUrgent === true ? "SIII" : "nah"}</p>

        <button onClick={handleDelete}>Borrar</button>
        <Link to={`/todo/${params.id}/edit`}>
          <button>Ir a Editar</button>
        </Link>

      </div>
    </div>
  );
}

export default TodoDetails;