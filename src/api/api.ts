import axios from "../config/axios.customize";

// Auth
export const callRegister = (data: IRegisterDto): Promise<IBackendRes<any>> => {
  return axios.post("/api/v1/auth/register", data);
};

export const callActive = (data: any): Promise<IBackendRes<any>> => {
  return axios.post("/api/v1/auth/active", data);
};

export const callLogin = (data: ILoginDto): Promise<IBackendRes<ILoginRes>> => {
  return axios.post("/api/v1/auth/login", data);
};

export const callLogout = (): Promise<IBackendRes<any>> => {
  return axios.post("/api/v1/auth/logout");
};

export const callRefreshToken = (): Promise<IBackendRes<any>> => {
  return axios.get("/api/v1/auth/refresh");
};

export const callFetchUserByEmail = (
  email: string
): Promise<IBackendRes<IUser>> => {
  return axios.get(`/api/v1/users/email/${email}`);
};

export const callSendEmail = (email: string): Promise<IBackendRes<any>> => {
  return axios.post("/api/v1/auth/code", { email });
};

export const callGenerateNewPassword = (
  data: IGenerateNewPasswordDto
): Promise<IBackendRes<any>> => {
  return axios.post("/api/v1/auth/forget", data);
};

export const callChangePassword = (data: any): Promise<IBackendRes<any>> => {
  return axios.patch("/api/v1/auth/password", data);
};

export const callFetchCurrentAccount = (): Promise<IBackendRes<IUser>> => {
  return axios.get(`/api/v1/auth/account`);
};

//User

export const callFetchAllUers = (): Promise<IBackendRes<IUser[]>> => {
  return axios.get(`/api/v1/users`);
};

export const callFetchUserById = (id: string): Promise<IBackendRes<IUser>> => {
  return axios.get(`/api/v1/users/${id}`);
};

export const callFollowUser = (
  receiverId: string
): Promise<IBackendRes<IUser>> => {
  return axios.post(`/api/v1/users/follow/${receiverId}`);
};

export const callFetchFollowingUsers = (
  id: String
): Promise<IBackendRes<any>> => {
  return axios.get(`/api/v1/users/following/${id}`);
};

export const callFetchOnlineUsers = (data: any): Promise<IBackendRes<any>> => {
  return axios.post(`/api/v1/users/find-all-with-id`, data);
};

export const callUpdateUser = (
  id: string,
  data: any
): Promise<IBackendRes<any>> => {
  return axios.patch(`/api/v1/users/${id}`, data);
};

export const callDeleteUser = (id: string): Promise<IBackendRes<any>> => {
  return axios.delete(`/api/v1/users/${id}`);
};

export const callFindUsersByFullName = (
  fullname: string
): Promise<IBackendRes<IUser[]>> => {
  return axios.get(`/api/v1/users/fullname/${fullname}`);
};

export const callFetchListUser = (query: any) => {
  return axios.get(`/api/v1/users/paginate?${query}`);
};

export const callFetchCountData = () => {
  return axios.get(`/api/v1/users/count`);
};

//Upload
export const callUploadSingleFile = (
  file: any
): Promise<IBackendRes<IFileUpload>> => {
  const bodyFormData = new FormData();
  bodyFormData.append("file", file);
  return axios({
    method: "post",
    url: "/api/v1/files/upload",
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//Post
export const callFetchListPost = (query: any) => {
  return axios.get(`/api/v1/posts/paginate?${query}`);
};

export const callFetchPosts = (): Promise<IBackendRes<IPost[]>> => {
  return axios.get(`/api/v1/posts`);
};

export const callFetchPostsWithAuthor = (
  userId: string
): Promise<IBackendRes<IPost[]>> => {
  return axios.get(`/api/v1/posts/author/${userId}`);
};

export const callCreatePost = (data: any): Promise<IBackendRes<any>> => {
  return axios.post(`/api/v1/posts`, data);
};

export const callUpdatePost = (
  id: string,
  data: any
): Promise<IBackendRes<any>> => {
  return axios.patch(`/api/v1/posts/${id}`, data);
};

export const callDeletePost = (id: string): Promise<IBackendRes<any>> => {
  return axios.delete(`/api/v1/posts/${id}`);
};

export const callLike = (postId: string): Promise<IBackendRes<any>> => {
  return axios.post(`/api/v1/posts/like/${postId}`);
};

//Comment

export const callComment = (
  postId: string,
  content: string
): Promise<IBackendRes<any>> => {
  return axios.post(`/api/v1/comments/${postId}`, { content });
};

//Chat

export const callFetchChats = (): Promise<IBackendRes<IChat[]>> => {
  return axios.get(`/api/v1/chats`);
};

export const callFetchGroupChats = (): Promise<IBackendRes<IChat[]>> => {
  return axios.get(`/api/v1/chats/group`);
};

export const callAccessChat = (
  receiverId: string
): Promise<IBackendRes<IChat>> => {
  return axios.post(`/api/v1/chats`, { receiverId });
};

export const callCreateGroupChat = (data: any): Promise<IBackendRes<IChat>> => {
  return axios.post(`/api/v1/chats/create`, data);
};

export const callLeaveGroupChat = (id: string): Promise<IBackendRes<any>> => {
  return axios.patch(`/api/v1/chats/leave/${id}`);
};

export const callUpdateGroupChat = (
  id: string,
  data: any
): Promise<IBackendRes<any>> => {
  return axios.patch(`/api/v1/chats/${id}`, data);
};

export const callDeleteGroupChat = (id: string): Promise<IBackendRes<any>> => {
  return axios.delete(`/api/v1/chats/${id}`);
};

//Message

export const callFetchMessagesWithChat = (
  chatId: string
): Promise<IBackendRes<IMessage[]>> => {
  return axios.get(`/api/v1/messages/${chatId}`);
};

export const callSendMessage = (
  data: ISendMessageDto
): Promise<IBackendRes<IMessage>> => {
  return axios.post(`/api/v1/messages`, data);
};
