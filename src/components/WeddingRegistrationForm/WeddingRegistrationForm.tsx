'use client'

import * as Yup from 'yup';
import {Field, Formik} from 'formik';
import {t} from '@/utils/Utils';
import weddingRegistrationForm from '@/locales/cs/weddingRegistrationForm.json';
import React, {useState} from 'react';
import {TWeddingRegistrationForm} from "@/types/TWeddingRegistrationForm";
import Escorts from "@/components/WeddingRegistrationForm/Escorts";
import Children from "@/components/Children";

export default function WeddingRegistrationForm() {
    const [success, setSuccess] = useState(false);
    const ContactFormSchema = Yup.object().shape({
        firstname: Yup.string().required(t(weddingRegistrationForm, 'firstnameRequired')),
        lastname: Yup.string().required(t(weddingRegistrationForm, 'lastnameRequired')),
        escorts: Yup.array().of(
            Yup.object({
                firstname: Yup.string().required(t(weddingRegistrationForm, 'escortFirstnameRequired')),
                lastname: Yup.string().required(t(weddingRegistrationForm, 'escortLastnameRequired')),
            })
        ),
        children: Yup.array().of(
            Yup.object({
                name: Yup.string().required(t(weddingRegistrationForm, 'childrenNameRequired')),
            })
        ),
        isAttending: Yup.boolean().required(t(weddingRegistrationForm, 'isAttendingRequired')),
        transport: Yup.string()
            .oneOf([
                t(weddingRegistrationForm, 'needsTransport'),
                t(weddingRegistrationForm, 'selfTransport'),
            ])
            .required(t(weddingRegistrationForm, 'transportRequired')),
    });

    return (
        <Formik<TWeddingRegistrationForm>
            initialValues={{
                firstname: '',
                lastname: '',
                escorts: [],
                children: [],
                isAttending: '',
                transport: '',
            }}
            validationSchema={ContactFormSchema}
            onSubmit={async (values, {setStatus, resetForm}) => {
                setStatus(null);
                const res = await fetch("/api/wedding-registration-form", {
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
            }}
        >
            {({status, errors, touched, values, isSubmitting, handleSubmit}) => {
                return (
                    <>
                        <h2 className="uk-text-lead">{t(weddingRegistrationForm, 'title')}</h2>

                        <form onSubmit={handleSubmit} method="post" className="uk-form-stacked uk-text-left">
                            {success && (
                                <div className="uk-alert-success" data-uk-alert="">
                                    <a href="" className="uk-alert-close" data-uk-close=""></a>
                                    <p className="uk-text-center">{t(weddingRegistrationForm, 'successText')}</p>
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
                                            {t(weddingRegistrationForm, 'firstname')}
                                        </label>
                                        <div className="uk-form-controls">
                                            <Field
                                                type="text"
                                                name="firstname"
                                                className="uk-input"
                                                autoComplete="given-name"
                                            />
                                            {errors.firstname && touched.firstname && (
                                                <span className="uk-text-danger">{errors.firstname}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="uk-width-1-2@s">
                                        <label className="uk-form-label" htmlFor="lastname">
                                            {t(weddingRegistrationForm, 'lastname')}
                                        </label>
                                        <div className="uk-form-controls">
                                            <Field
                                                type="text"
                                                name="lastname"
                                                className="uk-input"
                                                autoComplete="family-name"
                                            />
                                            {errors.lastname && touched.lastname && (
                                                <span className="uk-text-danger">{errors.lastname}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Escorts values={values} errors={errors} touched={touched}/>

                            <Children values={values} errors={errors} touched={touched}/>

                            <div className="uk-margin">
                                <label className="uk-form-label">{t(weddingRegistrationForm, 'isAttending')}</label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="isAttending"
                                        value={'1'}
                                        className="uk-radio"
                                    />
                                    &nbsp;{t(weddingRegistrationForm, 'attending')}
                                </label>
                                <div className="uk-clearfix"></div>
                                <label>
                                    <Field
                                        type="radio"
                                        name="isAttending"
                                        value={'0'}
                                        className="uk-radio"
                                    />
                                    &nbsp;{t(weddingRegistrationForm, 'notAttending')}
                                </label>
                                {errors.isAttending && touched.isAttending && (
                                    <>
                                        <div className="uk-clearfix"></div>
                                        <span className="uk-text-danger">{errors.isAttending}</span>
                                    </>
                                )}
                            </div>

                            <div className="uk-margin">
                                <label className="uk-form-label">{t(weddingRegistrationForm, 'transport')}</label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="transport"
                                        value={t(weddingRegistrationForm, 'needsTransport')}
                                        className="uk-radio"
                                    />
                                    &nbsp;{t(weddingRegistrationForm, 'needsTransport')}
                                </label>
                                <div className="uk-clearfix"></div>
                                <label>
                                    <Field
                                        type="radio"
                                        name="transport"
                                        value={t(weddingRegistrationForm, 'selfTransport')}
                                        className="uk-radio"
                                    />
                                    &nbsp;{t(weddingRegistrationForm, 'selfTransport')}
                                </label>
                                {errors.transport && touched.transport && (
                                    <>
                                        <div className="uk-clearfix"></div>
                                        <span className="uk-text-danger">{errors.transport}</span>
                                    </>
                                )}
                            </div>

                            <div className="uk-margin-bottom uk-text-center">
                                {isSubmitting ? (
                                    <span data-uk-spinner="ratio: 3"></span>
                                ) : (
                                    <input
                                        type="submit"
                                        value={t(weddingRegistrationForm, 'submit')}
                                        className="uk-button uk-button-primary uk-width-medium"
                                    />
                                )}
                            </div>
                        </form>
                    </>
                )
            }}
        </Formik>
    );
}
