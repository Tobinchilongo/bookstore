const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oyOo2JI0L7cgO3ZxGBKS/books';
const getData = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
const postData = (data) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),

  });
};
const deleteData = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    return await response.text();
  } catch (error) {
    throw new Error(error.message);
  }
};
export const fetchBooks = async () => getData();
export const postBook = async (data) => postData(data);
export const deleteBook = async (id) => deleteData(id);
