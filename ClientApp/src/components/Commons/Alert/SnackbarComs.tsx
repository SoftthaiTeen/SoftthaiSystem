let notistakEnqueueSnackbar;

export default class SnackbarComs {
  static registerNotistakEnqueueSnackbar(instance) {
    notistakEnqueueSnackbar = instance;
  }

  static success(arg) {
    notistakEnqueueSnackbar(arg);
  }

  static error(arg) {
    notistakEnqueueSnackbar(arg, { variant: 'error' });
  }
}
