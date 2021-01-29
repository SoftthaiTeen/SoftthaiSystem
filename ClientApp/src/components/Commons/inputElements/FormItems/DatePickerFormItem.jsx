import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField } from "@material-ui/core";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import {
    MobileDatePicker,
    MobileDateTimePicker,
    LocalizationProvider,
} from "@material-ui/pickers";
import { getLanguage } from 'src/i18n';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/components/Commons/inputElements/formErrors';

export function DatePickerFormItem(props) {
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

    const format = showTime ? "dd/MM/yyyy HH:mm" : "dd/MM/yyyy";

    return (
        <LocalizationProvider
            dateAdapter={DateFnsUtils}
            locale={getLanguage().dateFns}
        >
            <DateTimePickerComponent
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
                autoOk
                {...inputProps}
                renderInput={(props) => (
                    <TextField
                        margin="normal"
                        variant="outlined"
                        size="small"
                        fullWidth
                        {...props}
                        required={required}
                        error={Boolean(errorMessage)}
                        helperText={errorMessage || hint}
                    />
                )}
            />
        </LocalizationProvider>
    );
}

DatePickerFormItem.defaultProps = {
    required: false,
};

DatePickerFormItem.propTypes = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    label: PropTypes.string,
    hint: PropTypes.string,
    autoFocus: PropTypes.bool,
    size: PropTypes.string,
    prefix: PropTypes.string,
    placeholder: PropTypes.string,
    externalErrorMessage: PropTypes.string,
    showTime: PropTypes.bool,
    inputProps: PropTypes.object
};

export default DatePickerFormItem;
