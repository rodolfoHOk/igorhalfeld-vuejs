import { useStore } from '@/hooks/store';
import { setCurrentComponent, setFeedbackType } from '@/store';

export interface Navigation {
  next: () => void;
  back: () => void;
  setErrorState: () => void;
  setSuccessState: () => void;
}

export function useNavigation(): Navigation {
  const store = useStore();

  function next(): void {
    if (store.currentComponent === 'SelectFeedbackType') {
      setCurrentComponent('WriteFeedback');
    }
  }

  function back(): void {
    if (store.currentComponent === 'WriteFeedback') {
      setCurrentComponent('SelectFeedbackType');
      setFeedbackType('');
    }
  }

  function setErrorState(): void {
    setCurrentComponent('Error');
  }

  function setSuccessState(): void {
    setCurrentComponent('Success');
  }

  return {
    next,
    back,
    setErrorState,
    setSuccessState,
  };
}
