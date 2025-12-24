import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav>
      <img src="/assets/logo1.png" alt="Ubi_Soft" />
      <h2>Ubi_Soft</h2>
      <button onClick={() => dispatch(toggleTheme())}>
        Dark / Light
      </button>
    </nav>
  );
}
