import { UserEntity } from '@modules/auth/domain/entities/user.entity';
import { UserEntityResponse } from '../interfaces/auth.response';

export const validateUserMapper = (userResponse: UserEntityResponse): UserEntity => {
  const user: UserEntity = {
    id: userResponse.id,
    name: userResponse.name,
    email: userResponse.email,
    password: userResponse.password,
    phone: userResponse.phone,
    avatar: userResponse.avatar,
    roles: userResponse.roles,
    active: userResponse.active,
    createdAt: userResponse.created_at,
    updatedAt: userResponse.updated_at,
  };

  return user;
};
