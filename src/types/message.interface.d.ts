export {};

declare global {
  interface IMessage {
    _id: string;
    content: string;
    sender: {
      _id: string;
      email: string;
      fullname: string;
      avatar: string;
    };
    chatId: {
      _id: string;
      chatName: string;
      isGroupChat: boolean;
      users: string[];
      latestMessage: string;
    };
    createdBy: {
      _id: string;
      email: string;
    };
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
  }

  interface ISendMessageDto {
    content: string;
    chatId: string
  }
}
