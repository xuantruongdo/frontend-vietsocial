import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFound from "./components/NotFound/NotFound";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import Group from "./pages/Group/Group";
import Register from "./pages/Register/Register";
import Forget from "./pages/Forget/Forget";
import { useDispatch } from "react-redux";
import { callFetchCurrentAccount, callFetchOnlineUsers } from "./api/api";
import { useEffect, useState } from "react";
import { doGetAccountAction } from "./redux/account/accountSlice";
import Setting from "./pages/Setting/Setting";
import useSocket from "./hooks/useSocket";
import LayoutAdmin from "./pages/Admin/LayoutAdmin";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ManageUser from "./pages/Admin/ManageUser/ManageUser";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import ManagePost from "./pages/Admin/ManagePost/ManagePost";
import Confirmation from "./pages/Confirmation/Confirmation";

function App() {
  const socket = useSocket();
  const [onlineIds, setOnlineIds] = useState<string[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const handleOnlineUsers = (usersArray: any) => {
      setOnlineIds(usersArray);
    };

    socket?.on("onlineUsers", handleOnlineUsers);

    // Wait for the socket connection to be established
    socket?.on("connect", () => {
      // Emit the "getOnlineUsers" event when the component mounts
      socket?.emit("getOnlineUsers");
    });

    return () => {
      socket?.off("onlineUsers", handleOnlineUsers);
    };
  }, [socket?.id]);

  const fetchOnlineUsers = async () => {
    let data = { ids: onlineIds };
    const res = await callFetchOnlineUsers(data);
    if (res && res.data) {
      setOnlineUsers(res.data);
    }
  };

  useEffect(() => {
    fetchOnlineUsers();
  }, [onlineIds]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Feed onlineUsers={onlineUsers} />,
        },
        {
          path: "/profile/:slug",
          element: <Profile onlineUsers={onlineUsers} />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/group",
          element: <Group />,
        },
        {
          path: "/setting/:slug",
          element: <Setting />,
        },
      ],
    },
    {
      path: "/admin",
      element: <LayoutAdmin />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "user",
          element: (
            <ProtectedRoute>
              <ManageUser />
            </ProtectedRoute>
          ),
        },
        {
          path: "post",
          element: (
            <ProtectedRoute>
              <ManagePost />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/confirmation",
      element: <Confirmation />,
    },
    {
      path: "/forget",
      element: <Forget />,
    },
  ]);

  const dispatch = useDispatch();

  const fetchCurrentAccount = async () => {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/register"
      // || window.location.pathname === '/'
    )
      return;
    const res = await callFetchCurrentAccount();
    if (res && res.data) {
      dispatch(doGetAccountAction(res.data));
    }
  };

  useEffect(() => {
    fetchCurrentAccount();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
