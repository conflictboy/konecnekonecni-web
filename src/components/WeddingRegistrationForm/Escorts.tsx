import {t} from "@/utils/Utils";
import weddingRegistrationForm from "@/locales/cs/weddingRegistrationForm.json";
import {Field, FieldArray, FormikErrors, FormikTouched} from "formik";
import Link from "next/link";
import React from "react";
import {TEscort, TWeddingRegistrationForm} from "@/types/TWeddingRegistrationForm";

export default function Escorts(
    {values, errors, touched}: {
        values: TWeddingRegistrationForm
        errors: FormikErrors<TWeddingRegistrationForm>,
        touched: FormikTouched<TWeddingRegistrationForm>
    }
) {
    const typedErrors = errors as FormikErrors<TWeddingRegistrationForm>;
    const typedTouched = touched as FormikTouched<TWeddingRegistrationForm>;
    const escortsErrors = typedErrors.escorts as FormikErrors<TEscort>[] | undefined;
    const escortsTouched = typedTouched.escorts as FormikTouched<TEscort>[] | undefined;

    return (
        <div className="uk-margin">
            {values.escorts.length > 0 && (
                <h3 className="uk-h5 uk-text-center">{t(weddingRegistrationForm, 'escortTitle')}</h3>
            )}
            <FieldArray name="escorts">
                {({push, remove}) => (
                    <>
                        {values.escorts.map((_, index) => (
                            <div key={index} className="uk-grid uk-margin-small-bottom"
                                 data-uk-grid="">
                                <div className="uk-width-expand">
                                    <label className="uk-form-label"
                                           htmlFor={`escorts.${index}.firstname`}>
                                        {t(weddingRegistrationForm, 'firstname')}
                                    </label>
                                    <div className="uk-form-controls">
                                        <Field
                                            type="text"
                                            name={`escorts.${index}.firstname`}
                                            className="uk-input"
                                        />
                                        {escortsErrors?.[index]?.firstname && escortsTouched?.[index]?.firstname && (
                                            <span className="uk-text-danger">
                                                                    {escortsErrors?.[index]?.firstname}
                                                                </span>
                                        )}
                                    </div>
                                </div>

                                <div className="uk-width-expand">
                                    <label className="uk-form-label"
                                           htmlFor={`escorts.${index}.lastname`}>
                                        {t(weddingRegistrationForm, 'lastname')}
                                    </label>
                                    <div className="uk-form-controls">
                                        <div className="uk-flex uk-flex-middle">
                                            <Field
                                                type="text"
                                                name={`escorts.${index}.lastname`}
                                                className="uk-input"
                                            />

                                            <Link
                                                href="#"
                                                scroll={false}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    remove(index);
                                                }}
                                                title={t(weddingRegistrationForm, 'removeRow')}
                                                className="uk-margin-left"
                                            >
                                                <span data-uk-icon="icon: minus-circle"></span>
                                            </Link>
                                        </div>
                                        {escortsErrors?.[index]?.lastname && escortsTouched?.[index]?.lastname && (
                                            <span className="uk-text-danger">
                                                                {escortsErrors?.[index]?.lastname}
                                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <Link
                            href="#"
                            scroll={false}
                            onClick={(e) => {
                                e.preventDefault();
                                push({firstname: '', lastname: ''});
                            }}
                            title={t(weddingRegistrationForm, 'addEscort')}
                            className="uk-link-text"
                        >
                            <span uk-icon="icon: plus-circle"></span>&nbsp;
                            {t(weddingRegistrationForm, 'addEscort')}
                        </Link>
                    </>
                )}
            </FieldArray>
        </div>
    );
}