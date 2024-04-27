import {UserRoles} from '@modules/auth/domain/entities/user.entity';

export interface UserEntityResponse {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  avatar?: string;
  roles: UserRoles[];
  active?: boolean;
  created_at: Date;
  updated_at?: Date;
}
