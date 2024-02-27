export { }

declare global {
    interface IPost{
        _id: string;
        author: {
            _id: string;
            fullname: string;
            avatar: string;
            email: string;
        };
        content: string;
        image: string;
        likes: Array;
        comments: [];
        createdBy: Object;
        deletedAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }
}