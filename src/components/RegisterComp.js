import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import '../css/components/loginComp.css';

const RegisterComp = () => {
    const History = useHistory();

    const formik = useFormik (
        {
            initialValues: {
                email: "",
                password: ""
            },
            validationSchema: Yup.object({
                full_name: Yup.string()
                    .min(2, "Mininum 2 characters")
                    .max(20, "Maximum 20 characters")
                    .required("Required!"),
                email: Yup.string()
                    .email("Invalid email format")
                    .required("Required!"),
                password: Yup.string()
                    .min(8, "Minimum 8 characters")
                    .required("Required!")
            }),

            onSubmit: values => { // baris kode ini di pake buat jajal doang karena ga pake api
                alert(JSON.stringify(values, null, 2));
              }
        }
    )
    return ( 
        <div>
            <form className="contForm" onSubmit={formik.handleSubmit}>
                <div className="divForm">
                    <label className="labelForm">Name</label>
                    <input 
                        type="text" 
                        name="full_name" 
                        value={formik.values.full_name}
                        onChange={formik.handleChange}
                        className="inputField" />

                        {formik.errors.full_name && formik.touched.full_name && (
                            <p className="errorMsg">{formik.errors.full_name}</p>
                        )}
                </div>
                <div className="divForm">
                    <label className="labelForm">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="inputField" />

                        {formik.errors.email && formik.touched.email && (
                            <p className="errorMsg">{formik.errors.email}</p>
                        )}
                </div>
                <div className="divForm">
                    <label className="labelForm">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className="inputField" />

                        {formik.errors.password && formik.touched.password && (
                            <p className="errorMsg">{formik.errors.password}</p>
                        )}
                </div>
                {/* <div className="text-forget-password">
                    <p className="cursorText">Lupa Password ?</p>
                    <p style={{marginLeft:10,marginRight:10}}>|</p>
                    <p className="cursorText">Konfirmasi Email?</p>
                </div> */}
                <div className="divForm">
                    <button type="submit" className="buttonForm">Register</button>
                </div>
                <div className="flex-text">
                    <p style={{marginRight:10}}>Already have an account?</p>
                    <p className="regHover" onClick={()=>History.push("/sign_in")}>SignIn here</p>
                </div>
            </form>
        </div>
     );
}
 
export default RegisterComp;