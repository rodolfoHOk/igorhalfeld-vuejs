import useStore from '@/hooks/useStore';
import {
  setCurrentUser,
  resetCurrentUser,
  setApiKey,
  clearCurrentUser,
} from './user';

describe('User Store', () => {
  afterEach(() => {
    resetCurrentUser();
  });

  it('should set current user', () => {
    const store = useStore();

    setCurrentUser({ name: 'Rodolfo' });

    expect(store.User.currentUser.name).toBe('Rodolfo');
  });

  it('should set api key on current user', () => {
    const store = useStore();

    setApiKey('a-1-b-2-c');

    expect(store.User.currentUser.apiKey).toBe('a-1-b-2-c');
  });

  it('should clean current user', () => {
    const store = useStore();

    setCurrentUser({ name: 'Rodolfo' });
    expect(store.User.currentUser.name).toBe('Rodolfo');

    clearCurrentUser();

    expect(store.User.currentUser.name).toBeFalsy();
  });
});
