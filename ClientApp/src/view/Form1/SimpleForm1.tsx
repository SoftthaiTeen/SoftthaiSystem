import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormWrapper, FormButtons } from "src/components/Commons/style/ContentWrapper";
import yupFormSchemas from "src/components/Commons/yup/yupFormSchemas";
import { i18n } from 'src/i18n';
import { values } from 'lodash';
import { Button, Grid } from '@material-ui/core';
import InputFormItem from "src/components/Commons/inputElements/FormItems/InputFormItem";
import DatePickerFormItem from "src/components/Commons/inputElements/FormItems/DatePickerFormItem";
import DatePickerRangeFormItem from "src/components/Commons/inputElements/FormItems/DatePickerRangeFormItem";
import SnackbarComs from "src/components/Commons/Alert/SnackbarComs";
import MuiModal from "src/components/Commons/Alert/MuiModal";
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import { SaveAlt } from '@material-ui/icons';


const i18nField = 'entities.simplePage.fields';

const schema = yup.object().shape({
    exText1: yupFormSchemas.string(i18n(`${i18nField}.exText1`), { required: true }),
    exDate1: yupFormSchemas.datetime(i18n(`${i18nField}.exDate1`), { required: true }),
    exDate2: yupFormSchemas.datetime(i18n(`${i18nField}.exDate1`), { required: true }),
    exDateRange: yupFormSchemas.datetimeRange(i18n(`${i18nField}.exDateRange1`), { required: true })
});
function SimpleForm1(props) {
    const [initialValues] = useState(() => {
        const record = props.record || {};

        return {
            exText1: "rstgg"
        }
    });

    const [openModal, setOpenModal] = useState(false);

    const form = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: initialValues as any

    });


    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const onSubmit = (values) => {
        //props.onSubmit(props.record?.id, values);
        console.log("values", values);
        //SnackbarComs.success("Hello Save");
        handleOpenModal();


    };

    const onChangeDate = (value) => {
        form.setValue("exDate2", value);
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
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <DatePickerFormItem
                                name="exDate1"
                                label={i18n(`${i18nField}.exDate1`)}
                                onChange={onChangeDate}
                                required={true}
                                showTime={true}
                            />
                            <DatePickerFormItem
                                name="exDate2"
                                label={i18n(`${i18nField}.exDate1`)}
                                //onChange={() => form.setValue("exText1", "fhsfh")}
                                required={true}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <DatePickerRangeFormItem
                                name="exDateRange"
                                startText={i18n(`${i18nField}.exDateRange1Start`)}
                                endText={i18n(`${i18nField}.exDateRange1End`)}

                                required={true}
                            />
                        </Grid>
                    </Grid>

                    <FormButtons >
                        <Button
                            variant="contained"
                            color="primary"

                            type="button"
                            onClick={form.handleSubmit(onSubmit)}
                            startIcon={<SaveAlt />}
                            size="small"
                        >
                            {i18n('common.save')}
                        </Button>
                    </FormButtons>
                 
                </form>
            </FormProvider>
            {openModal &&
                <MuiModal
                    title={i18n('common.areYouSure')}
                    content={"Do you want to save data?"}
                    onConfirm={() => { }}
                    onClose={() => { handleCloseModal(); }}
                    okText={i18n('common.yes')}
                    cancelText={i18n('common.no')}
                />}

        </FormWrapper>
    )
}

export default SimpleForm1;
