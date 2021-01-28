import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormWrapper } from "src/components/Commons/style/ContentWrapper";
import yupFormSchemas from "src/components/Commons/yup/yupFormSchemas";
import { i18n } from 'src/i18n';
import { values } from 'lodash';
import { Grid } from '@material-ui/core';
import InputFormItem from "src/components/Commons/inputElements/FormItems/InputFormItem";

const i18nField = 'entities.simplePage.fields';

const schema = yup.object().shape({
    exText1: yupFormSchemas.string(i18n(`${i18nField}.exText1`), { required: true }),
});
function SimpleForm1(props) {
    const [initialValues] = useState(() => {
        const record = props.record || {};

        return {
            exText1: record.ext
        }
    });

    const form = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: initialValues as any

    });

    const onSubmit = (values) => {
        props.onSubmit(props.record?.id, values);
    };


    return (
        <FormWrapper>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Grid spacing={2} container>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <InputFormItem
                                name="exText1"
                                label={i18n(`${i18nField}.exText1`)}
                                required={true}                     
                            />
                        </Grid>
                    </Grid>

                </form>
            </FormProvider>
        </FormWrapper>
    )
}

export default SimpleForm1;
