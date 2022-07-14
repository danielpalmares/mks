import Axios, { AxiosInstance } from 'axios';

class Http {
  private static instance: AxiosInstance;
  private constructor() {}

  static getInstance(): AxiosInstance {
    if (this.instance) return this.instance;

    this.instance = Axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Key-Inflection': 'camel',
      },
      baseURL: 'https://mks-frontend-challenge-api.herokuapp.com/api/v1',
      // baseURL: import.meta.env.VITE_BASE_URL *** issues with jest environment
    });

    return this.instance;
  }
}

export default Http;
export const http = Http.getInstance();
