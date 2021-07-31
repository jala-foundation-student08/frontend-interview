import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBarComponent";

function App() {
  const headerTable = [
    "Username",
    "First Name",
    "Last Name",
    "Email",
    "Location",
    "...",
  ];
  const aux = { username: "Jua", email: "jaklsdf@hotmail.com" };
  const [datos, setDatos] = useState([]);
  const [input, setInput] = useState("");
  const [postListDefault, setPostListDefault] = useState([]);

  useEffect(() => {
    let fetch = async () => {
      const posts = await axios.get(
        "https://randomuser.me/api/?page=1&results=10&seed=abc"
      );
      setDatos(posts.data.results);
      setPostListDefault([aux]);
    };
    fetch();
  }, []);
  const updateInput = async (input) => {
    const filtered = postListDefault.filter((cancion) => {
      return cancion.username.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setDatos(filtered);
  };
  return (
    <div className="login-box-container ">
      <SearchBar input={input} onChange={updateInput} />
      {headerTable.map((item) => (
        <div>
          <div className="calendar" key="item">
            {item}
          </div>
          {headerTable.map((hour) => {
            for (let index = 0; index < 15; index++) {
              //Aqui utilizaría la data del api pero no me deja hacer el map, capaz usaría un for, seguiré avanzando
              switch (item) {
                case "Username":
                  return (
                    <div className="calendar" key="hour">
                      {aux.username}
                    </div>
                  );
                case "First Name":
                  return (
                    <div className="calendar" key="hour">
                      alvarez
                    </div>
                  );
                case "Last Name":
                  return (
                    <div className="calendar" key="hour">
                      juan
                    </div>
                  );
                case "Email":
                  return (
                    <div className="calendar" key="hour">
                      alvarez
                    </div>
                  );
                case "Location":
                  return (
                    <div className="calendar" key="hour">
                      alvarez
                    </div>
                  );
                case "...":
                  return (
                    <div className="calendar" key="hour">
                      ...
                    </div>
                  );
                default:
                  break;
              }
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default App;
