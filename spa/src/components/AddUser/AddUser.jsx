import React from 'react';
import { inject, observer } from 'mobx-react';
import { useFormik } from 'formik';
import NumberFormat from 'react-number-format';

import './AddUser.scss';
import { validationsSchema } from '../../utils/validations/validation';

import Form from '../../ui/Form/Form';
import FormField from '../../ui/FormField/FormField';

function AddUser({
  loading,
  errload,

  savedUser,
}) {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema: validationsSchema,
    onSubmit: async (values) => {
      await savedUser(values.name, values.phone);

      if (!errload) {
        formik.resetForm();
      }
    },
  });

  return (
    <div className="add">
      <Form
        buttonText={loading ? 'Added...' : 'Add'}
        onSubmit={formik.handleSubmit}
        disabled={!formik.isValid}
        loading={loading}
        error={errload}
      >
        <FormField
          fieldType="text"
          fieldLabel="Name"
          fieldName="name"
          fieldID="name"
          fieldPlaceholder="Name"
          value={formik.values.name}
          error={formik.errors.name}
          touched={formik.touched.name}
          onChange={(evt) => {
            formik.handleChange(evt);
            formik.setFieldTouched('name');
          }}
          disabled={loading}
        />
        <NumberFormat
          format="+7 (###) ### ## ##"
          mask="_"
          fieldType="text"
          fieldLabel="Phone"
          fieldName="phone"
          fieldID="phone"
          fieldPlaceholder="+7 (###) ### ## ##"
          value={formik.values.phone}
          error={formik.errors.phone}
          touched={formik.touched.phone}
          onChange={(evt) => {
            formik.handleChange(evt);
            formik.setFieldTouched('phone');
          }}
          disabled={loading}
          customInput={FormField}
        />
      </Form>
    </div>

  );
}

export default inject(({ UserStore }) => {
  const {
    loading,
    errload,

    savedUser,
  } = UserStore;

  return {
    loading,
    errload,

    savedUser,
  };
})(observer(AddUser));
