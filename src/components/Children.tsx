import {t} from "@/utils/Utils";
import weddingRegistrationForm from "@/locales/cs/weddingRegistrationForm.json";
import {Field, FieldArray, FormikErrors, FormikTouched} from "formik";
import Link from "next/link";
import React from "react";
import {TChildren, TWeddingRegistrationForm} from "@/types/TWeddingRegistrationForm";

export default function Children(
    {values, errors, touched}: {
        values: TWeddingRegistrationForm
        errors: FormikErrors<TWeddingRegistrationForm>,
        touched: FormikTouched<TWeddingRegistrationForm>
    }
) {
    const typedErrors = errors as FormikErrors<TWeddingRegistrationForm>;
    const typedTouched = touched as FormikTouched<TWeddingRegistrationForm>;

    const childrenErrors = typedErrors.children as FormikErrors<TChildren>[] | undefined;
    const childrenTouched = typedTouched.children as FormikTouched<TChildren>[] | undefined;

    return (
        <div className="uk-margin">
            {values.children.length > 0 && (
                <h3 className="uk-h5 uk-text-center">{t(weddingRegistrationForm, 'childrenTitle')}</h3>
            )}
            <FieldArray name="children">
                {({push, remove}) => (
                    <>
                        {values.children.map((_, index) => (
                            <div key={index} className="uk-grid uk-margin-small-bottom"
                                 data-uk-grid="">
                                <div className="uk-width-expand">
                                    <label className="uk-form-label"
                                           htmlFor={`children.${index}.name`}>
                                        {t(weddingRegistrationForm, 'childrenName')}
                                    </label>
                                    <div className="uk-form-controls">
                                        <div className="uk-width-1-2@s">
                                            <div className="uk-flex uk-flex-middle">
                                                <Field
                                                    type="text"
                                                    name={`children.${index}.name`}
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
                                            {childrenErrors?.[index]?.name && childrenTouched?.[index]?.name && (
                                                <span className="uk-text-danger">
                                                                    {childrenErrors?.[index]?.name}
                                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <Link
                            href="#"
                            scroll={false}
                            onClick={(e) => {
                                e.preventDefault();
                                push({name: ''});
                            }}
                            title={t(weddingRegistrationForm, 'addChildren')}
                            className="uk-link-text"
                        >
                            <span uk-icon="icon: plus-circle"></span>&nbsp;
                            {t(weddingRegistrationForm, 'addChildren')}
                        </Link>
                    </>
                )}
            </FieldArray>
        </div>
    );
}