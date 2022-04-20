import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Detailpage from "./pages/Detailpage";

function App() {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getAllFilms());
  });
  // useSelector((s) => console.log(s.filmReucer));
  // console.log(data);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
    </div>
  );
}

export default App;
