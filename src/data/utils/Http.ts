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
      baseURL: import.meta.env.BASE_URL,
    });

    return this.instance;
  }
}

export default Http;
export const http = Http.getInstance();
