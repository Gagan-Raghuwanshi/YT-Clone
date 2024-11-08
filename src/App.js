import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Watch from "./components/Watch";
import Feed from "./components/Feed";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
