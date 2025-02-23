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
declare class XHub {
    headers: {
        Authorization: string;
    };
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
    constructor(apikey: string);
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
    getCategories(): Promise<CategoryResponse>;
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
    fetch(type: string): Promise<FetchResponse>;
}
export { XHub, CategoryResponse, FetchResponse };
