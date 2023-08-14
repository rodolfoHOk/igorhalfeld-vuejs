import { reactive, readonly } from 'vue';

export type StoreState = {
  currentComponent: string;
  feedbackType: string;
  message: string;
  currentPage: string;
  fingerprint: string;
  apiKey: string;
};

const initialState: StoreState = {
  // currentComponent: 'SelectFeedbackType',
  currentComponent: 'Success',
  feedbackType: '',
  message: '',
  currentPage: '',
  fingerprint: '',
  apiKey: '',
};

const state = reactive<StoreState>({ ...initialState });

export function setCurrentComponent(component: string): void {
  state.currentComponent = component;
}

export function setFeedbackType(type: string): void {
  state.feedbackType = type;
}

export function setMessage(message: string): void {
  state.message = message;
}

export function setCurrentPage(page: string): void {
  state.currentPage = page;
}

export function setFingerprint(fingerprint: string): void {
  state.fingerprint = fingerprint;
}

export function setApiKey(key: string): void {
  state.apiKey = key;
}

export function resetStore(): void {
  setCurrentComponent(initialState.currentComponent);
  setFeedbackType(initialState.feedbackType);
  setMessage(initialState.message);
  setFingerprint(initialState.fingerprint);
  setCurrentPage(initialState.currentPage);
  setApiKey(initialState.apiKey);
}

export default readonly(state);
