import React from "react";
import "./css/BookingForm.css";
import { Link } from "react-router-dom";
import restaurant from "../components/Assets/restaurant.jpg";
import { useFormik } from "formik";
import { basicSchema } from "../schemas"

const onSubmit = async (values, actions)=> {
    console.log(values)
    console.log(actions)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
}

export const BookingForm = () => {
  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email:"",
      guestNumber:"",
      date:"",
      time:"",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);
  return (
    <div className="form-background">
      <div className="form">
        <img className="pic"  src={restaurant} alt="" />
        <form className="form-class" onSubmit={handleSubmit} autoComplete="off">
          <h1 className="header">Little Lemon</h1>
          <h2 className="header">Book a Table</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              id="email"
              placeholder="Enter your email"
              className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className="errors">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label id="select" htmlFor="guestNumber">
              Guest Number
            </label>
            <select
              value={values.guestNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              id="guestNumber"
              name="guestNumber"
              className={errors.guestNumber && touched.guestNumber ? "input-error" : ""}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
            {errors.guestNumber && touched.guestNumber && <p className="errors">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
              type="date"
              id="date"
              name="date"
              className={errors.date && touched.date ? "input-error" : ""}
            />
            {errors.date && touched.date && <p className="errors">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              value={values.time}
              onChange={handleChange}
              onBlur={handleBlur}
              type="time"
              id="time"
              name="time"
              required
            />
          </div>
          <div>
           <Link to='/confirmed'><button disabled={isSubmitting} className="formbtn" type="submit">
              Book
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};
