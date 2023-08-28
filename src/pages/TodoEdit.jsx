import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../services/service.config";

function TodoEdit() {

  const params = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleIsUrgentChange = (e) => setIsUrgent(e.target.checked);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      // const response = await axios.get(`http://localhost:5005/api/todo/${params.id}`)
      const response = await service.get(`/todo/${params.id}`)
      console.log(response)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setIsUrgent(response.data.isUrgent)

    } catch (error) {
      console.log(error)
      navigate("/error")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... edit the ToDo here

    try {
      
      await service.put(`/todo/${params.id}`, {
        title, description, isUrgent
      })

      navigate(`/todo/${params.id}/details`)

    } catch (error) {
      console.log(error)
      navigate("/error")
    }

  };

  return (
    <div>
      <h3>Editar To-Do</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleTitleChange}
          value={title}
        />

        <br />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />

        <br />

        <label htmlFor="isUrgent">Urgent</label>
        <input
          type="checkbox"
          name="isUrgent"
          onChange={handleIsUrgentChange}
          checked={isUrgent}
        />

        <br />

        <button type="submit">Editar</button>
        
      </form>
    </div>
  );
}

export default TodoEdit;