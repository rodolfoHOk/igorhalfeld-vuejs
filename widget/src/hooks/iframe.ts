import { setApiKey, setCurrentPage, setFingerprint } from '@/store';

interface IframeControl {
  updateCoreValuesOnStore: () => void;
  notifyOpen: () => void;
  notifyClose: () => void;
}

export function useIframeControl(): IframeControl {
  function updateCoreValuesOnStore() {
    if (process.env.NODE_ENV === 'production') {
      const query = new URLSearchParams(window.location.search);
      const apiKey = query.get('api_key') ?? '';
      const page = query.get('page') ?? '';
      const fingerprint = query.get('fingerprint') ?? '';

      setApiKey(apiKey);
      setCurrentPage(page);
      setFingerprint(fingerprint);
      return;
    }

    setApiKey('api-key-de-teste');
    setCurrentPage('https://playground-url.com');
    setFingerprint('fingerprint-de-teste');
  }

  function notifyOpen() {
    window.parent.postMessage(
      {
        isWidget: true,
        isOpen: true,
      },
      '*'
    );
  }

  function notifyClose() {
    window.parent.postMessage(
      {
        isWidget: true,
        isOpen: false,
      },
      '*'
    );
  }

  return {
    updateCoreValuesOnStore,
    notifyOpen,
    notifyClose,
  };
}
