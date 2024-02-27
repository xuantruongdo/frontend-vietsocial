export {};

declare global {
  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  interface IRegisterDto {
    fullname: string;
    email: string;
    password: string;
  }

  interface ILoginDto {
    username: string;
    password: string;
  }

  interface ILoginRes {
    access_token: string;
    user: {
      _id: string;
      fullname: string;
      email: string;
      role: Object;
      permissions: Array;
    };
  }

  interface IGenerateNewPasswordDto {
    email: string;
    confirmationCode: Number;
  }

  interface IUser {
    _id: string;
    email: string;
    fullname: string;
    avatar: string;
    cover: string;
    role: Object;
    isActive: boolean;
    isVerify: boolean;
    type: string;
    followers: Array;
    note: string;
    live: string;
    from: string;
    relationship: string;
    followings: Array;
    isDeleted: boolean;
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
  }
}
