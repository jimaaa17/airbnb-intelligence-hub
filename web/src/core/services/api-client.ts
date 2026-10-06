/**
 * Base Object-Oriented API Client with typed contracts and error encapsulation.
 */
export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  }

  protected async get<T>(path: string): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`API Error [${res.status}]: ${res.statusText}`);
    }

    return res.json() as Promise<T>;
  }

  protected async post<T, B>(path: string, body: B): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    if (!res.ok) {
      const errDetail = await res.text();
      throw new Error(`API Error [${res.status}]: ${errDetail || res.statusText}`);
    }

    return res.json() as Promise<T>;
  }
}
