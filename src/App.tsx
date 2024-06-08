import Auth from "./components/pages/auth/auth/Auth";
import Main from "./components/main/Main";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import "./vendor/fonts/fonts.scss"
import './App.css';

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => !!state.userReducer.email);

  return (
    <div className="App">
      {
        isLoggedIn
          ? <Main />
          : <Auth />
      }
    </div>
  );
};

export default App;
