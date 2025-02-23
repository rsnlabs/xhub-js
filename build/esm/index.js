var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
const apiUrl = "https://xhub.rnilaweera.lk/api/nsfw";
class XHub {
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
    constructor(apikey) {
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
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const response = yield axios.get(`${apiUrl}/categories`, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`Failed to fetch category list: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || error.message}`);
            }
        });
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
    fetch(type) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                const response = yield axios.post(`${apiUrl}`, { type }, { headers: this.headers });
                return response.data;
            }
            catch (error) {
                throw new Error(`Failed to fetch NSFW Image: ${((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) || error.message}`);
            }
        });
    }
}
export { XHub };
