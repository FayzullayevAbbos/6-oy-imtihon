import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Access from "./pages/Access";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Header from "/src/pages/Header";
import MainLayout from "./pages/MainLayout";

function App() {
  const [datas, setDatas] = useState([]);
 const [score , setScore] = useState(0)
  const [getI, setGetI] = useState([]);
  function setGetId(i) {
    fetch(
      `https://ajggnrxrtmlhttkekzmg.supabase.co/rest/v1/quizzes?subject_id=eq.${i}&select=*`,
      {
        headers: {
          apiKey: apiKey,
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setGetI(data));
  }

  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZ2ducnhydG1saHR0a2Vrem1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3NTg1MDEsImV4cCI6MjAxOTMzNDUwMX0.PjwrPBaBasvSbW8WJA3IGPzTkh9f0NJ6yI8ij1KlsyM";
  useEffect(() => {
    fetch(
      "https://ajggnrxrtmlhttkekzmg.supabase.co/rest/v1/subjects?select=*",
      {
        headers: {
          apiKey: apiKey,
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const [dark, setDark] = useState(false);
  function cilckDark() {
    setDark(!dark);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      Element: <MainLayout />,
      children: [
        {
          path: "",
          element: (
            <Home
              setGetId={setGetId}
              datas={datas}
              cilckDark={cilckDark}
              dark={dark}
            />
          ),
        },
        {
          path: "game",
          element: <MainPage setScore={setScore} getI={getI} cilckDark={cilckDark} dark={dark} />,
        },
        {
          path: "game/access",
          element: <Access score={score} cilckDark={cilckDark} dark={dark} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
