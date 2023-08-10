import { Axios } from 'axios';

type CreatePayload = {
  type: string;
  text: string;
  page: string;
  apiKey: string;
  device: string;
  fingerprint: string;
};

type ResponsePayload = {
  data: any;
  errors: any;
};

export default (httpClient: Axios) => ({
  create: async (feedback: CreatePayload): Promise<ResponsePayload> => {
    const response = await httpClient.post('/feedbacks', feedback);

    return {
      data: response.data,
      errors: {
        status: response.request.status,
        statusText: response.request.statusText,
      },
    };
  },
});
