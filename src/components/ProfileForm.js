import React from 'react'
import {Alert, Button, Text, TextInput, View} from 'react-native'
import { Formik } from 'formik';
import * as yup from 'yup';
import { profileSchema } from '../utils/validationSchema';

// Styles
import styles from './styles/ProfileFormStyles'

export default function ProfileForm({item}) {
  return (
    <View>
      <Formik
        initialValues={{ 
          first_name: "", 
          last_name: "", 
          phone: "", 
          email: "", 
          address: "", 
          city: "", 
          state: "", 
          zip: "", 
          photo: "",
          notes: ""
          }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          first_name: yup.string()
            .required("Please enter your first name")
            .max(32, "Name is too long"),
          last_name: yup.string()
            .required("Please enter your last name")
            .max(32, "Name is too long"),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.form}>

            <TextInput
              value={values.first_name}
              onChangeText={handleChange('first_name')}
              onBlur={() => setFieldTouched('first_name')}
              placeholder="First Name"
              style={styles.inputStyle}
            />
            {touched.first_name && errors.first_name &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.first_name}</Text>
            }

            <TextInput
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              onBlur={() => setFieldTouched('last_name')}
              placeholder="Phone Number"
              style={styles.inputStyle}
            />
            {touched.last_name && errors.last_name &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.last_name}</Text>
            }

            <TextInput
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={() => setFieldTouched('phone')}
              placeholder="Phone"
              style={styles.inputStyle}
            />
            {touched.phone && errors.phone &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.phone}</Text>
            }

            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="Email"
              style={styles.inputStyle}
            />
            {touched.email && errors.email &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
            }

            <TextInput
              value={values.address}
              onChangeText={handleChange('address')}
              onBlur={() => setFieldTouched('address')}
              placeholder="Address"
              style={styles.inputStyle}
            />
            {touched.address && errors.address &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.address}</Text>
            }

            <TextInput
              value={values.city}
              onChangeText={handleChange('city')}
              onBlur={() => setFieldTouched('city')}
              placeholder="City"
              style={styles.inputStyle}
            />
            {touched.city && errors.city &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.city}</Text>
            }

            <TextInput
              value={values.state}
              onChangeText={handleChange('state')}
              onBlur={() => setFieldTouched('state')}
              placeholder="State"
              style={styles.inputStyle}
            />
            {touched.state && errors.state &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.state}</Text>
            }

            <TextInput
              value={values.zip}
              onChangeText={handleChange('zip')}
              onBlur={() => setFieldTouched('zip')}
              placeholder="Zipcode"
              style={styles.inputStyle}
            />
            {touched.zip && errors.zip &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.zip}</Text>
            }

            <TextInput
              value={values.photo}
              onChangeText={handleChange('photo')}
              onBlur={() => setFieldTouched('photo')}
              placeholder="Photo URL"
              style={styles.inputStyle}
            />
            {touched.photo && errors.photo &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.photo}</Text>
            }

            <TextInput
              value={values.notes}
              onChangeText={handleChange('notes')}
              onBlur={() => setFieldTouched('notes')}
              placeholder="Notes"
              style={styles.inputStyle}
            />
            {touched.notes && errors.notes &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.notes}</Text>
            }
            
            <Button
              title='Submit'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>

      {/* <Text style={styles.formLabel}>Login Form</Text>
      <View>
        <TextInput 
          placeholder="Enter Email" 
          style={styles.inputStyle} 
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.inputStyle}
        />
      </View> */}
    </View>
  )
}