import { getErrorMessage } from ".";

export const fetchJson = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  returnErrorMessage = true
): Promise<any> => {
  try {
    const response = await fetch(input, init);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    if (returnErrorMessage) throw getErrorMessage(error);
    throw error;
  }
};

export const fetchBlob = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  returnErrorMessage = true
): Promise<Blob> => {
  try {
    const response = await fetch(input, init);
    const fileBlob = await response.blob();
    return fileBlob;
  } catch (error) {
    if (returnErrorMessage) throw getErrorMessage(error);
    throw error;
  }
};
