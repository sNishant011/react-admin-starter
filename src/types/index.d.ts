export interface Post {
  readonly id?: number;
  title: string;
  body: string;
  userId: number;
}

export type loginPaylod = {
  email: string;
  password: string;
};
