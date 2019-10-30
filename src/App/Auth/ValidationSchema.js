import * as Yup from 'yup';
const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('PLATFORMS_FORM_FIELD_PLATFORM_ERROR_VALIDATION')
  /*   serviceLevel: Yup.number().typeError(
    t('PLATFORMS_FORM_FIELD_SERVICE_ERROR_VALIDATION')
  ),
  environment: Yup.number().typeError(
    t('PLATFORMS_FORM_FIELD_ENVIRONMENT_ERROR_VALIDATION')
  ),
  complexity: Yup.number()
    .required(t('PLATFORMS_FORM_FIELD_REQUIRED'))
    .min(1, t('PLATFORMS_FORM_FIELD_COMPLEXITY_ERROR_VALIDATION')),
  technologies: Yup.array().min(
    1,
    t('PLATFORMS_FORM_FIELD_SELECTED_TECHNOLOGIES_ERROR_VALIDATION')
  ) */
  // estado: Yup.bool().required(
  //     t('USER_CALENDAR_TASK_FORM_ERROR_MESSAGE_REQUIRED_FIELD')
  // ),
});
export default ValidationSchema;
