import Dashboard from "./component/dashboard";
import "./style/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Playeritem } from "./component/playeritem";
import { PlayerList } from "./component/playerlist";
import { PlayerTable } from "./component/playertable";
import { Playerform } from "./component/playerform";

const dummyData = [
  {
    username: "haris",
    email: "12345@mail.com",
    password: "qwerty",
    experience: "1",
    Lvl: "1"

  },
  {
    username: "poki",
    email: "5324@mail.com",
    password: "zxcv",
    experience: "0",
    lvl: "2"
  },
  {
    username: "lontong",
    email: "856@mail.com",
    password: "asdf",
    experience: "100",
    lvl: "99"
  },
 
]
// function App() {
//   return (
//     <div className="Dashboard">
//       <Dashboard/>
//     </div>
//   );
// }

export default function App () {

  return (
    <div>
      <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerList/>}/>
        
          <Route path="/create" element={<Playerform/>}/>
        
          <Route path="/:id" element={<Playerform/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}