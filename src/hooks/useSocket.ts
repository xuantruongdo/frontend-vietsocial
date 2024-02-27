// useSocket.ts
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { setSocket } from "../redux/socket/socketSlice";
import { BASE_URL } from "../constants/constants";

const useSocket = () => {
  const dispatch = useDispatch();
  const socket = useSelector((state: any) => state.socket.socket);
  const currentUser = useSelector((state: any) => state.account.user);

  useEffect(() => {
    const newSocket = io(BASE_URL, {
      query: { userId: currentUser?._id },
    });

    dispatch(setSocket(newSocket));

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, [currentUser]);

  return socket;
};

export default useSocket;
