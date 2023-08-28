import "./App.css";
import { Routes, Route } from "react-router";

// pages
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';
import TodoEdit from './pages/TodoEdit';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

// components
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />

      <br />
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/todo/:id/details" element={<TodoDetails />} />
        <Route path="/todo/:id/edit" element={<TodoEdit />} />

        {/* error FE routes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;