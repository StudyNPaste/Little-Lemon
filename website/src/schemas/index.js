
import * as yup from "yup"

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    guestNumber: yup.number().required('Required'),
    date: yup.date().required('Required'),
});

