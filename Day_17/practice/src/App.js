import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import BookList from "./Pages/BookList";
import NotFound from "./Pages/NotFound";
import BookLayout from "./BookLayout";

function App() {
  return (
    <>
      <navbar>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/books"}>BookLists</Link>
        </ul>
      </navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nested Route */}
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
