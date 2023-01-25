import React from 'react'
 import { Formik, Form, Field } from "formik";
 import * as Yup from "yup";
import axios from "axios"
import { Helmet } from 'react-helmet';
 const SignupSchema = Yup.object().shape({
   imgurl: Yup.string()
     .min(2, "Too Short!")
     .max(4650, "Too Long!")
     .required("Required"),
   description: Yup.string()
     .min(2, "Too Short!")
     .max(50, "Too Long!")
     .required("Required"),
   title: Yup.string()
     .min(2, "Too Short!")
     .max(50, "Too Long!")
     .required("Required"),
   imgurlavatar: Yup.string()
     .min(2, "Too Short!")
     .max(6750, "Too Long!")
     .required("Required"),
   name: Yup.string()
     .min(2, "Too Short!")
     .max(50, "Too Long!")
     .required("Required"),
   price: Yup.number()
     .min(2, "Too Short!")
     .max(26636366350, "Too Long!")
     .required("Required"),
 });
 
const AddPage = () => {


  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Add Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Formik
        initialValues={{
          imgurl: "",
          description: "",
          title: "",
          imgurlavatar: "",
          name: "",
          price: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
            axios.post("http://localhost:8080/coursesrow", values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ padding: "50px" }}>
            <Field
              name="imgurl"
              placeholder="Img Url"
              className={errors.imgurl && touched.imgurl ? "border-red" : null}
            />
            {errors.imgurl && touched.imgurl ? (
              <div className="formik">{errors.imgurl}</div>
            ) : null}
            <br></br>
            <Field
              name="description"
              placeholder="Description"
              className={errors.imgurl && touched.imgurl ? "border-red" : null}
            />
            {errors.description && touched.description ? (
              <div className="formik">{errors.description}</div>
            ) : null}
            <br></br>
            <Field
              name="title"
              placeholder="title"
              className={errors.imgurl && touched.imgurl ? "border-red" : null}
            />
            {errors.title && touched.title ? (
              <div className="formik">{errors.title}</div>
            ) : null}
            <br></br>
            <Field
              name="imgurlavatar"
              placeholder="imgurlavatar"
              className={errors.imgurl && touched.imgurl ? "border-red" : null}
            />
            {errors.imgurlavatar && touched.imgurlavatar ? (
              <div className="formik">{errors.imgurlavatar}</div>
            ) : null}
            <br></br>
            <Field
              name="name"
              placeholder="name"
              className={errors.imgurl && touched.imgurl ? "border-red" : null}
            />
            {errors.name && touched.name ? (
              <div className="formik">{errors.name}</div>
            ) : null}
            <br></br>
            <Field
              name="price"
              placeholder="price"
              className={errors.imgurl && touched.imgurl ? "border-red" : null}
            />
            {errors.price && touched.price ? (
              <div className="formik">{errors.price}</div>
            ) : null}
            <br></br>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddPage