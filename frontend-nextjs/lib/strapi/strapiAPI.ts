import axios, { AxiosError, AxiosRequestConfig } from "axios";
import qs from "qs";

const DEFAULT_API_URL = "http://localhost:1337";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export const getStrapiURL = (path: string = ""): string => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || DEFAULT_API_URL}${path}`;
};

/**
 * Generate a populate field, ex `populate=Foo.Bar`
 * @param components {String[]} A array of strings
 */
export const getPopulateField = (...components: string[]) => {
  const populate = (components || []).join(".");

  return {
    populate,
  };
};

/**
 * Handle multiple populate fields from {@link getPopulateField}
 *
 * @param fields Multiple outputs from {@link getPopulateField}
 */
export const getMultipePopulateFields = (...fields: { populate: string }[]) => {
  const populate = fields.map((elemenet) => elemenet.populate);

  return {
    populate,
  };
};

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {AxiosRequestConfig} options Options passed to {@link axios}
 * @returns Parsed API call response
 */
export async function getStrapiAPI<T = any>(
  path: string,
  urlParamsObject: object = {},
  options: AxiosRequestConfig = {}
) {
  // Merge default and user options
  const mergedOptions = Object.assign(
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
    options
  );

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  try {
    const response = await axios.get(requestUrl, mergedOptions);

    if (response.status >= 400) {
      throw new Error(response.statusText);
    }

    console.log("getStrapiAPI", response.data, requestUrl);

    return response.data as T;
  } catch (err: any | AxiosError) {
    if (err instanceof AxiosError) {
      console.error("axios", err.cause, err.status, err.response?.data);

      if (err.status) {
        throw err.status;
      }
    }

    throw err;
  }
}

/**
 * Get a resource from strapi
 *
 * @param url {String} URL of media
 */
export const getStrapiMedia = (url: string) => {
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;

  return imageUrl;
};
