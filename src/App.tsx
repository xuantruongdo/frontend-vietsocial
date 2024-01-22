import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFound from "./components/NotFound/NotFound";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true, element: <Feed/>
        },
        {
          path: '/profile',
          element: <Profile/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
