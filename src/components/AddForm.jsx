import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../services/service.config";

function AddForm(props) {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleIsUrgentChange = (e) => setIsUrgent(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // ... add the ToDo here
    try {
      // const response = await axios.post("http://localhost:5005/api/todo", {
      //   title,
      //   description,
      //   isUrgent
      // })
      await service.post("/todo", { title, description, isUrgent })

      console.log("elemento creado")
      // navigate("/todo")
      props.getData()
      // props.setAllTodos((currentState) => {
      //   // clonar el estado
      //   // agregar nuevo elemento
      //   // actualizar el estado
      // })
    } catch (error) {
      console.log(error)
      navigate("/error")
    }


  }

  return (
    <div>
      <h3>Agregar To-Do</h3>

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

        <button type="submit">Agregar</button>
      
      </form>
    </div>
  );
}

export default AddForm;