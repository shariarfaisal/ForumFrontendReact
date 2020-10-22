import React from 'react'
import Layout from '../Layout'
import './create-post.scss'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'


const CreatePost = (props) => {

  const initialValues = {
    title: '',
    body: '',
    tags: ''
  }

  const onSubmit = values => {
    console.log(values);
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Required!'),
    body: Yup.string().required('Required!').max(5000),
    tags: Yup.string().max(255)
  })

  return(
    <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {formik => {
          console.log(formik)
          return (
            <div className="create-post">
              <div className="create-post-content">
                <h1 className="title">Create Post</h1>
                  <Form className="form">
                    <FormControl control="input" name="title" label="Title" type="text" />
                    <FormControl control="textarea" name="body" label="Body" />
                    <FormControl control="input" name="tags" label="Tags" type="text" />
                    <div className="form-item footer">
                      <button disabled={!formik.isValid || !formik.dirty} type="submit" className="submit">Submit</button>
                    </div>
                  </Form>
              </div>
            </div>
          )
        }}
      </Formik>
    </Layout>
  )
}
export default CreatePost
