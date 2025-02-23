import axios from "axios";

const apiUrl = "https://xhub.rnilaweera.lk/api/nsfw";

interface FetchResponse {
  status: string;
  image: {
    type: string;
    url: string;
  };
  powered_by: string;
}

interface CategoryResponse {
  status: string;
  categories: string[];
  powered_by: string;
}

class XHub {
  headers: { Authorization: string };

  /**
   * **XHub**
   *
   * Discord: https://api.rnilaweera.lk/discord
   *
   * Join the Discord server and create an account with `/register` slash command.
   * Get your API key using `/generate-key` for free!
   *
   * @param {string} apikey - XHub API Key (required)
   */
  constructor(apikey: string) {
    if (!apikey) {
      throw new Error("Please provide an API key.");
    }

    this.headers = { Authorization: `Bearer ${apikey}` };
  }

  /**
   * Get categories
   * @returns {Promise<CategoryResponse>}
   * @example
   * ```js
   * const xhub = new XHub("your_api_key");
   * xhub.getCategories().then(category => {
   *   console.log(category);
   * });
   * ```
   */
  async getCategories(): Promise<CategoryResponse> {
    try {
      const response = await axios.get(`${apiUrl}/categories`, { headers: this.headers });
      return response.data as CategoryResponse;
    } catch (error: any) {
      throw new Error(`Failed to fetch category list: ${error.response?.data?.error || error.message}`);
    }
  }

  /**
   * Fetch an NSFW image by type
   * @param {string} type - The category type (e.g., "pussy", "ass", "boobs")
   * @returns {Promise<FetchResponse>}
   * @example
   * ```js
   * const xhub = new XHub("your_api_key");
   * xhub.fetch("pussy").then(image => {
   *   console.log(image);
   * });
   * ```
   */
  async fetch(type: string): Promise<FetchResponse> {
    try {
      const response = await axios.post(
        `${apiUrl}`,
        { type },
        { headers: this.headers }
      );
      return response.data as FetchResponse;
    } catch (error: any) {
      throw new Error(`Failed to fetch NSFW Image: ${error.response?.data?.error || error.message}`);
    }
  }
}

export { XHub, CategoryResponse, FetchResponse };