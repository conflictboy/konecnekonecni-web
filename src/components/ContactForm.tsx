'use client'

import * as Yup from 'yup';
import {Field, Formik} from "formik";
import {t} from "@/utils/Utils";
import commentForm from '@/locales/cs/contactForm.json';
import {useState} from "react";

export default function ContactForm() {
    const [success, setSuccess] = useState(false);
    const ContactFormSchema = Yup.object().shape({
        firstname: Yup
            .string()
            .required(t(commentForm, 'firstnameRequired')),
        lastname: Yup
            .string()
            .required(t(commentForm, 'lastnameRequired')),
        email: Yup
            .string()
            .email(t(commentForm, 'emailFormat'))
            .required(t(commentForm, 'emailRequired')),
        text: Yup
            .string()
            .required(t(commentForm, 'textRequired'))
            .min(3, t(commentForm, 'textMinLength', {count: 3})),
    });

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                text: '',
            }}
            validationSchema={ContactFormSchema}
            onSubmit={async (values, {setStatus, resetForm}) => {
                setStatus(null);
                const res = await fetch("/api/contact-form", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(values)
                });

                if (!res.ok) {
                    setStatus(Object.values(await res.json()).flat());
                    return;
                }

                resetForm();
                setSuccess(true);
            }}>
            {({status, errors, touched, isSubmitting, handleSubmit}) => (
                <div className="uk-section">
                    <h2 className="uk-text-lead">{t(commentForm, 'title')}</h2>

                    <form onSubmit={handleSubmit} method="post" className="uk-form-stacked uk-text-left">
                        {success && (
                            <div className="uk-alert-success" data-uk-alert="">
                                <a href="" className="uk-alert-close" data-uk-close=""></a>
                                <p className="uk-text-center">{t(commentForm, 'submitSuccess')}</p>
                            </div>
                        )}
                        {status && (
                            <div className="uk-alert-danger" data-uk-alert="">
                                <a href="" className="uk-alert-close" data-uk-close=""></a>
                                <p className="uk-text-center">{status}</p>
                            </div>
                        )}

                        <div className="uk-margin">
                            <div className="uk-grid" data-uk-grid="">
                                <div className="uk-width-1-2@s">
                                    <label className="uk-form-label" htmlFor="firstname">
                                        {t(commentForm, 'firstname')}
                                    </label>
                                    <div className="uk-form-controls">
                                        <Field
                                            id="firstname"
                                            type="text"
                                            name="firstname"
                                            className="uk-input"
                                            autoComplete="given-name"
                                        />

                                        {errors.firstname && touched.firstname && (
                                            <span className="uk-text-danger">
                                                {errors.firstname}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="uk-width-1-2@s">
                                    <label className="uk-form-label" htmlFor="lastname">
                                        {t(commentForm, 'lastname')}
                                    </label>
                                    <div className="uk-form-controls">
                                        <Field
                                            id="lastname"
                                            type="text"
                                            name="lastname"
                                            className="uk-input"
                                            autoComplete="family-name"
                                        />

                                        {errors.lastname && touched.lastname && (
                                            <span className="uk-text-danger">
                                                {errors.lastname}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-grid" data-uk-grid="">
                                <div className="uk-width-1-2@s">
                                    <label className="uk-form-label" htmlFor="email">
                                        {t(commentForm, 'email')}
                                    </label>
                                    <Field
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        className="uk-input"
                                    />

                                    {errors.email && touched.email && (
                                        <span className="uk-text-danger">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="text">
                                {t(commentForm, 'text')}
                            </label>
                            <div className="uk-form-controls">
                                <Field
                                    id="text"
                                    rows="3"
                                    name="text"
                                    component="textarea"
                                    className="uk-textarea"
                                />

                                {errors.text && touched.text && (
                                    <span className="uk-text-danger">
                                        {errors.text}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="uk-margin-bottom uk-text-center">
                            {isSubmitting ? (
                                <span data-uk-spinner="ratio: 3"></span>
                            ) : (
                                <input type="submit"
                                       value={t(commentForm, 'submit')}
                                       className="uk-button uk-button-primary uk-width-medium"
                                />
                            )}
                        </div>
                    </form>
                </div>
            )}
        </Formik>
    )
}