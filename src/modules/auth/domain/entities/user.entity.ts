export enum UserRoles {
  Admin = 'admin',
  User = 'user',
}

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
  roles: UserRoles[];
  active?: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
