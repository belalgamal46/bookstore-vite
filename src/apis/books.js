import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'CHZ2rlhKmwy9m3YrTiBY';

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${baseUrl}/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createBook = async (args) => {
  try {
    const {
      title, itemId, author, category,
    } = args;
    await axios.post(`${baseUrl}/apps/${appId}/books`, {
      item_id: itemId,
      title,
      author,
      category,
    });

    return args;
  } catch (error) {
    return error;
  }
};

export const deleteBook = async (args) => {
  try {
    const url = `${baseUrl}/apps/${appId}/books/${args.id}`;
    await axios.delete(url);
    return args;
  } catch (error) {
    return error;
  }
};
