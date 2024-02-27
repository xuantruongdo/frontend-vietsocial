export const checkReceiver = (arr: IUser[], currentUserId: string): IUser | undefined => {
    if (currentUserId === arr[0]._id) {
      return arr[1];
    } else if (currentUserId === arr[1]._id) {
      return arr[0];
    }
    return undefined;
};