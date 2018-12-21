import { describe, PropTypes } from 'react-desc';
import { getAvailableAtBadge } from '../../utils';
export var doc = function doc(Form) {
  var DocumentedForm = describe(Form).availableAt(getAvailableAtBadge('Form')).description('A field in a form.').usage("import { Form } from 'grommet';\n<Form />");
  DocumentedForm.propTypes = {
    errors: PropTypes.shape({}).description("An object representing any errors in the data. They keys should\n        match the keys in the value object.").defaultValue({}),
    messages: PropTypes.shape({
      invalid: PropTypes.string,
      required: PropTypes.string
    }).description('Custom validation messages.').defaultValue({
      invalid: 'invalid',
      required: 'required'
    }),
    onChange: PropTypes.func.description('Function that will be called when any fields are updated.'),
    onSubmit: PropTypes.func.description("Function that will be called when the form is submitted. The\n      single argument is an event containing the latest value object\n      via `event.value`."),
    value: PropTypes.shape({}).description('An object representing all of the data in the form.').defaultValue({})
  };
  return DocumentedForm;
};