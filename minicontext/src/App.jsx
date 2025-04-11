import "./App.css";
import Login from "./conponets/Login";
import Profile from "./conponets/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
