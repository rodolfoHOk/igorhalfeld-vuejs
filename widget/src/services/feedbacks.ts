import { AxiosInstance } from 'axios';
import { RequestError } from '@/types/error';
import { Feedback } from '@/types/feedback';

type CreatePayload = {
  type: string;
  text: string;
  page: string;
  apiKey: string;
  device: string;
  fingerprint: string;
};

type CreateResponse = {
  data: Feedback;
  errors: RequestError | null;
};

export interface IFeedbacksService {
  create: (payload: CreatePayload) => Promise<CreateResponse>;
}

function FeedbacksService(httpClient: AxiosInstance): IFeedbacksService {
  async function create(payload: CreatePayload): Promise<CreateResponse> {
    const response = await httpClient.post<Feedback>('/feedbacks', payload);

    let errors: RequestError | null = null;
    if (!response.data) {
      errors = {
        status: response.request.status,
        statusText: response.request.statusText,
      };
    }

    return {
      data: response.data,
      errors,
    };
  }

  return {
    create,
  };
}

export default FeedbacksService;
