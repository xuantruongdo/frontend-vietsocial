export { }

declare global {
    interface IComment{
        _id: string;
        user: {
            _id: string;
            email: string;
            fullname: string;
            avatar: string;
        },
        content: string;
        createdAt: Date;
    }
}