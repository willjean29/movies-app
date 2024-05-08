import { UserRoles } from '@modules/auth/domain/entities/user.entity';
import { UserEntityResponse } from '@modules/auth/infra/interfaces/auth.response';
export const userEntityResponseMock: UserEntityResponse = {
  id: '65f908c91fa1aa4575e04205',
  name: 'jean osco',
  email: 'test29@gmail.com',
  password: '$2b$10$TrEmSBfMnkXkSb8lF5ah4./uQbbW8ZAyNVBNpeq1v5EUmPMwfSvCG',
  active: false,
  roles: [UserRoles.User],
  created_at: new Date('2024-03-19T03:38:49.613Z'),
  updated_at: new Date('2024-03-19T03:38:49.613Z'),
};
