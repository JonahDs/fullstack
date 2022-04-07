import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_ALL_BOOKS = gql`
  query fetchAllBooks {
    books {
      title
      author
    }
  }
`;

const App = () => {
  const { data, loading } = useQuery<{ books: {title: string}[] }>(GET_ALL_BOOKS);
  if (loading) return <p>...loading</p>;

  return (
    <>
      {data?.books.map((book) => (
        <p>{book.title}</p>
      ))}
    </>
  );
};

export default App;
