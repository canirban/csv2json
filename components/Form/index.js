import { ErrorMessage, Field, Form, Formik } from 'formik';
import { parseAsString } from '../../lib/utils/tsv2json';
import style from './Form.module.css';
export default function CSVForm(props) {
  const onSubmitHandler = async (values) => {
    let resp = {};
    let error = {};
    try {
      const response = await parseAsString(values);
      resp = response.json;
      error = response.error;
    } catch (e) {
      console.log(e.message);
      // error = e;
    }
    props.onSubmitForm(resp, error, values.content);
  };
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ content: props.content }}
        validate={(values) => {
          const errors = {};
          if (!values.content) {
            errors.content = 'This is a Required field';
          }
          return errors;
        }}
        //separte func
        onSubmit={onSubmitHandler}
      >
        {({ isSubmitting }) => (
          <Form className={style.container}>
            <label className={style.label} htmlFor="content">
              TSV Content
            </label>
            <Field
              className={`${style.input}`}
              component="textarea"
              rows="30"
              id="content"
              name="content"
              cols="50"
            />
            <ErrorMessage
              className={style.error}
              name="content"
              component="div"
            />
            <button
              className={style.button}
              type="submit"
              onClick={isSubmitting ? () => false : null}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
