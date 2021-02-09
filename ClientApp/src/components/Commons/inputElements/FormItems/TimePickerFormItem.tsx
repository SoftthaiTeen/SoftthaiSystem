import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import FormErrors from 'src/components/Commons/inputElements/formErrors';
import { TextField } from "@material-ui/core";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import { TimePicker, LocalizationProvider, MobileDatePicker, MobileDateTimePicker, } from "@material-ui/pickers";
import { getLanguage } from 'src/i18n';
import { useFormContext } from 'react-hook-form';



export function TimePickerFormItem(props) {
    const [MinTime, SetMinTime] = useState(props.minTime);
    const {
        label,
        name,
        hint,
        placeholder,
        autoFocus,
        autoComplete,
        externalErrorMessage,
        required,
        showTime,
        inputProps,
        minTime,
        maxTime,
    } = props;

    const {
        register,
        errors,
        formState: { touched, isSubmitted },
        setValue,
        watch,
    } = useFormContext();

    useEffect(() => {
        register({ name });
    }, [register, name]);

    const errorMessage = FormErrors.errorMessage(
        name,
        errors,
        touched,
        isSubmitted,
        externalErrorMessage,
    );

    const DateTimePickerComponent = showTime
        ? MobileDateTimePicker
        : MobileDatePicker;

    const format = "HH:mm";

    return (
        <LocalizationProvider
            dateAdapter={DateFnsUtils}
            locale={getLanguage().dateFns}
        >
            <TimePicker
                clearable
                inputFormat={format}
                label={label}
                id={name}
                ampm={false}
                minTime={minTime || undefined}
                maxTime={maxTime || undefined}
                autoComplete={autoComplete || undefined}
                onChange={(value) => {
                    setValue(name, value);
                    props.onChange && props.onChange(value);
                }}
                onBlur={(event) => {
                    props.onBlur && props.onBlur(event);
                }}
                value={watch(name) || null}
                autoOk
                {...inputProps}
                renderInput={(props) => (
                    <TextField
                        margin="normal"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={props.value || ''}
                        {...props}
                        required={required}
                        error={Boolean(errorMessage)}
                        helperText={errorMessage || hint}
                        
                    />
                )}
            />
            {/* <DateTimePickerComponent
                clearable
                inputFormat={format}
                label={label}
                id={name}
                onChange={(value) => {
                    setValue(name, value, { shouldValidate: true });
                    props.onChange && props.onChange(value);
                }}
                onBlur={(event) => {
                    props.onBlur && props.onBlur(event);
                }}
                value={watch(name) || null}
                placeholder={placeholder || undefined}
                autoFocus={autoFocus || undefined}
                autoComplete={autoComplete || undefined}
            // InputLabelProps={{
            //     shrink: true,
            // }}

            /> */}
        </LocalizationProvider>
    );
}

TimePickerFormItem.defaultProps = {
    required: false,
};

TimePickerFormItem.propTypes = {
    form: PropTypes.object,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    autoFocus: PropTypes.bool,
    size: PropTypes.string,
    prefix: PropTypes.string,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    inputProps: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default TimePickerFormItem;
