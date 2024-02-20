import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFound from "./components/NotFound/NotFound";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import Group from "./pages/Group/Group";
import Register from "./pages/Register/Register";

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
        },
        {
          path: '/chat',
          element: <Chat/>
        },
        {
          path: '/group',
          element: <Group/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
