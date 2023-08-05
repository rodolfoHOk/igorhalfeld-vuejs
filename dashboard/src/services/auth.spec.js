import mockAxios from 'axios';
import AuthService from './auth';

jest.mock('axios');

describe('Auth service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a token when call login', async () => {
    const token = 'a1b.c2d.e3f';

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } });
    });

    const response = await AuthService(mockAxios).login({
      email: 'john.doe@email.com',
      password: '123456',
    });

    expect(response.data).toHaveProperty('token');
    expect(response).toMatchSnapshot();
  });

  it('should return an user when call register', async () => {
    const user = {
      name: 'John Doe',
      email: 'john.doe@email.com',
      password: '1234',
    };

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user });
    });

    const response = await AuthService(mockAxios).register(user);

    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('email');
    expect(response.data).toHaveProperty('password');
    expect(response).toMatchSnapshot();
  });

  it('should throw an error when call login and not found user', async () => {
    const errors = { status: 404, statusText: 'Not Found' };

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: errors });
    });

    const response = await AuthService(mockAxios).login({
      email: 'igor@igor.me',
      password: '123',
    });

    expect(response.errors).toHaveProperty('status');
    expect(response.errors).toHaveProperty('statusText');
  });
});
