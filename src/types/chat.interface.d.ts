export { }

declare global {
    interface IChat{
        _id: string;

        chatName: string;
        isGroupChat: boolean,
        users: IUser[]
        groupAdmin: {
            _id: string;
            email: string;
            fullname: string;
            avatar: string;
        },
        latestMessage: {
            _id: string;
            content: string;
            sender: {
                _id: string;
                email: string;
                fullname: string;
                avatar: string;
            };
            createdAt: Date;
        }
        createdBy: Object;
        createdAt: Date;
        updatedAt: Date;
    }
}