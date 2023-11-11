import * as Yup from "yup";

export const regSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
    year: Yup.string().required("Please select your year of study").oneOf(['1', '2', '3', '4', '5'], 'Invalid Year of Study'),
    mobile: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Please enter your phone number'),
    city: Yup.string().required("Please enter your city"),
    info_source: Yup.string().required("Please select one option"),
    college: Yup.number().required("Please choose your College"),
  });
  