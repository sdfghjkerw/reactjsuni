import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    title: Yup.string().min(2, "At least 2 characters").required("Required"),
    author: Yup.string().required("Required"),
    genre: Yup.string().oneOf(["fiction", "nonfiction", "tech"], "Invalid genre"),
    rating: Yup.number().min(0).max(5).required("Required"),
  });

  return (
    <div>
      <h1>Add Book</h1>
      <Formik
        initialValues={{ title: "", author: "", genre: "fiction", rating: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const newBook = { ...values, id: Date.now() };
          const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
          localStorage.setItem("books", JSON.stringify([...savedBooks, newBook]));
          navigate("/books");
        }}
      >
        {() => (
          <Form className="book-form">
            <div>
              <label>Title:</label>
              <Field name="title" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>

            <div>
              <label>Author:</label>
              <Field name="author" />
              <ErrorMessage name="author" component="div" className="error" />
            </div>

            <div>
              <label>Genre:</label>
              <Field as="select" name="genre">
                <option value="fiction">Fiction</option>
                <option value="nonfiction">Nonfiction</option>
                <option value="tech">Tech</option>
              </Field>
              <ErrorMessage name="genre" component="div" className="error" />
            </div>

            <div>
              <label>Rating:</label>
              <Field type="number" name="rating" step="0.1" />
              <ErrorMessage name="rating" component="div" className="error" />
            </div>

            <button type="submit">Add Book</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
