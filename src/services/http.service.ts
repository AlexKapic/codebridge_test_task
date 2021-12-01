import { HttpHeader, HttpMethod, ContentType } from "../common/enums";
import { HttpOptions } from "../common/types/http";

class Http {
  public async load<T = unknown>(
    url: string,
    options: Partial<HttpOptions> = {}
  ): Promise<T> {
    try {
      const { method = HttpMethod.GET, payload = null, contentType } = options;

      const headers = this.getHeaders(contentType);

      const response = await fetch(url, {
        method,
        headers,
        body: payload,
      });

      await this.checkStatus(response);

      if (response.status === 204) {
        return null as unknown as T;
      }

      return this.parseJSON<T>(response);
    } catch (err) {
      return this.throwError(err as Error);
    }
  }

  private getHeaders(contentType?: ContentType): Headers {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  private async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const parsedException = await response.json();

      throw new Error(parsedException?.message ?? response.statusText);
    }

    return response;
  }

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private throwError(err: Error): never {
    throw err;
  }
}

export const http = new Http();
