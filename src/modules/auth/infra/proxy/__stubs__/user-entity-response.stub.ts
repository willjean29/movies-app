import { validateUserMapper } from '../../mappers/auth.mapper';
import { userEntityResponseMock } from '../__mocks__/user-entity-response.mock';

export const userEntityResponseStub = validateUserMapper(userEntityResponseMock);
