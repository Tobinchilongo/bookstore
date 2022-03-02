import React from 'react';

function BookAdd() {
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <input type="text" placeholder="Book Title .." />
      <input type="text" placeholder="Book Author .." />
      <form action="#">
        <select id="books" name="books">
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
        </select>
      </form>
      <button type="button">ADD BOOK</button>
    </>
  );
}

export default BookAdd;
