import axios from "axios"
// aqui vamos a definir la base de las llamadas al servidor
// aqui agregar information de authenticacion en todas las llamadas

const service = axios.create({
  baseURL: "http://localhost:5005/api"
})

export default service

// en servicios podemos crear funciones que hagan las llamadas al backend
// en nuestro caso, usaremos service para definer la base de las llamadas y elemento de auth
