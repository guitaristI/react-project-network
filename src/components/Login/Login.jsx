import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {loginThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router";


const LoginForm = (props) => {
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
     return (<div className=''>
         <div className='login-container'>
             <div className="login-item">
                 <h1>Please enter your e-mail and password</h1>
                 <h2>test email and password:<br/>
                     <span>Email:</span> free@samuraijs.com <span>Password:</span> free</h2>
                 <Formik
                     initialValues={{email: '', password: ''}}
                     onSubmit={(formData) => {
                         props.loginThunk(formData.email, formData.password, formData.rememberMe);
                     }}
                 >
                     {({
                           values,
                           errors,
                           touched,
                           handleChange,
                           handleBlur,
                           handleSubmit,
                           isSubmitting,
                           /* and other goodies */
                       }) => (
                           <div className='form-item'>
                               <form className='form-card' onSubmit={handleSubmit}>
                                   <Field type="email" placeholder='Your email' name="email"/>
                                   <Field type="password" placeholder='Your password' name="password"/>
                                   <div className='form-text'>
                                       <span>Remember me</span>
                                       <Field type="checkbox" name="rememberMe"/>
                                   </div>

                                   <button type="submit" disabled={isSubmitting}>
                                       Login
                                   </button>
                               </form>
                           </div>

                     )}
                 </Formik>
             </div>
         </div>
    </div>)
};
const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth
    })
}

export default connect( mapStateToProps,{loginThunk})(LoginForm);
