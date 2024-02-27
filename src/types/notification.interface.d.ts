export {};

declare global {
  interface INotification {
    sender: IUser;
    message: string;
    post?: IPost;
    type: string;
    createdAt: string;
  }
}
