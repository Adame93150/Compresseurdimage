import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';



const CSignup = () => {
  let history = useHistory()
//  const pour 
  const [userCreated, setUserCreated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token") || false

    if (token) {
    }
  }, [])

// initialisation des champs 
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },

    onSubmit: async values => {
      console.log(values)
      try {
        const response = await axios.post("http://localhost:8001/auth/signup", values)

        console.log(response);
        if (response.status === 200) {
          setUserCreated(true)
          alert("you are now registred, please login !")
          history.push("/SignIn")
        }
      } catch (error) {
        console.error(error)
      }
    },
    //Yup pour les regex de validation pour le sign up 
    validationSchema: yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/, "Passwords must have at least 4 characters, 1 number, 1 upper and 1 lowercase"),
      email: yup.string().email().required()
    }),
    // seulement au onChange que le regex s'applique
    validateOnChange: false
  });
  console.log('errors : ', formik.errors)


  if (userCreated) {
    return ("User created!")
  } else {
    return (
// formulaire avec formik pour le changement des state
      <form className="formStyle" onSubmit={formik.handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Pseudo</label>
          <input class="form-control" aria-describedby="pseudo" id="username" name="username" type="text" value={formik.values.username} onChange={formik.handleChange} />
          {formik.errors.username && <small>{formik.errors.username}</small>}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" id="password" name="password" type="text" value={formik.values.password} onChange={formik.handleChange} />
          {formik.errors.password && <small>{formik.errors.password}</small>}
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input class="form-control" aria-describedby="pseudo" id="email" name="email" type="text" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && <small>{formik.errors.email}</small>}
        </div>
        <button type="submit" class="btn btn-primary">SignUp</button>
      </form>

    );
  };
};
export default CSignup;