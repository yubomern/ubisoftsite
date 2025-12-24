import { useSelector,useDispatch  } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import TodoList from "./pages/TodoList";
import ContactForm from "./pages/ContactForm";

export default function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <div className={theme}>
      <Navbar />
      <Home />
      <Services />
        <TodoList />
        <ContactForm />
      <Contact />
    </div>
  );
}
