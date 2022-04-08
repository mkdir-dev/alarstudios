import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { useFormik } from 'formik';
import NumberFormat from 'react-number-format';

import FormFieldInput from '../../../ui/FormFieldInput/FormFieldInput';
import { dataUsers } from '../../../utils/constants/constants';
import { validationsSchema } from '../../../utils/validations/validation';

function TableUser({
  users, loading,
  editedUser, deletedUser,
}) {
  const [isUserID, setUserID] = useState('');
  const [isOldUser, seyOldUser] = useState({});
  const [isUsers, setUsers] = useState([]);
  const [isEdit, setEdit] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema: validationsSchema,
    onSubmit: (values) => {
      setEdit(false);

      editedUser(values, isUsers, isOldUser);
    },
  });

  useEffect(() => {
    if (!loading) {
      if (users.length !== 0) {
        setUsers(users);
      } else {
        setUsers(dataUsers);
      }
    }
  }, [users, loading, isUsers, setUsers]);

  return (
    <>
      {isUsers.map((user) => (
        <tr key={user.phone}>
          {isEdit && isUserID === `${user.name}.${user.phone}`
            ? (
              <>
                <th className="table__tbody-th_active">
                  <FormFieldInput
                    fieldType="text"
                    fieldName="name"
                    fieldID="name"
                    fieldPlaceholder={formik.values.name}
                    value={formik.values.name}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                    onChange={(evt) => {
                      formik.handleChange(evt);
                      formik.setFieldTouched('name');
                    }}
                  />
                </th>
                <th className="table__tbody-th_active">
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
                    customInput={FormFieldInput}
                  />
                </th>
                <th className="table__tbody-th">
                  <button
                    type="button"
                    onClick={() => {
                      formik.handleSubmit();
                    }}
                    className="table__button"
                  >
                    Save
                  </button>
                </th>
              </>
            ) : (
              <>
                <th className="table__tbody-th">{user.name}</th>
                <th className="table__tbody-th">{user.phone}</th>
                <th className="table__tbody-th">
                  <button
                    type="button"
                    onClick={() => {
                      setEdit(true);
                      seyOldUser({
                        name: user.name,
                        phone: user.phone,
                      });
                      setUserID(`${user.name}.${user.phone}`);
                      formik.setFieldValue('name', user.name);
                      formik.setFieldValue('phone', user.phone);
                    }}
                    className="table__button"
                  >
                    Edit
                  </button>
                </th>
              </>
            )}
          <th className="table__tbody-th">
            <button
              type="button"
              onClick={() => deletedUser(user, isUsers)}
              disabled={isEdit}
              className="table__button"
            >
              Delete
            </button>
          </th>
        </tr>
      ))}
    </>
  );
}

export default inject(({ UserStore }) => {
  const {
    users,
    loading,

    editedUser,
    deletedUser,
  } = UserStore;

  return {
    users,
    loading,

    editedUser,
    deletedUser,
  };
})(observer(TableUser));
