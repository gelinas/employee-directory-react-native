import React from 'react'
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { Formik } from 'formik';
import * as yup from 'yup';

// Styles
import styles from './styles/ProfileFormStyles'

export default function ProfileForm({item}) {
  return (
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
          .required("Enter first name")
          .max(32, "First name too long"),
        last_name: yup.string()
          .required("Enter last name")
          .max(32, "Last name too long"),
          phone: yup.string()
            .required("Enter phone number")
            .matches(
              /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$|^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$|^[2-9]{1}[0-9]{9}$/,
              "Format 10 digit, (XXX) XXX-XXXX, or XXX-XXX-XXXX"),
          email: yup.string()
            .required("Please enter an email address")
            .email("Enter valid email address")
            .max(255, "Email is too long"),
          address: yup.string()
            .required("Enter address")
            .max(255, "Address is too long"),
          city: yup.string()
            .required("Enter city")
            .max(32, "City is too long"),
          state: yup.string()
            .required("Enter state")
            .length(2, "Please use two chracter abbreviation")
            .uppercase(),
          zip: yup.number()
            .typeError("Enter 5-digit zip code")
            .positive("Enter 5-digit zip code")
            .required("Enter 5-digit zip code")
            .min(10000, "Enter 5-digit zip code")
            .max(99999, "Enter 5-digit zip code"),
          photo: yup.string()
            .url("Please enter a valid url to your hosted image")
            .max(255, "URL must be shroter than 255 characters"),
          notes: yup.string()
            .max(255, "Notes must contain fewer than 255 characters")
      })}
    >
      {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <KeyboardAwareScrollView 
            contentContainerStyle={styles.form}
            keyboardShouldPersistTaps='always'
          >

            {/* Name fields (2) */}
            <View style={styles.row}>
              <Text style={styles.formLabel}>Name</Text>
              <TextInput
                value={values.first_name}
                onChangeText={handleChange('first_name')}
                onBlur={() => setFieldTouched('first_name')}
                placeholder="First"
                style={styles.inputStyleDouble}
              />
              <TextInput
                value={values.last_name}
                onChangeText={handleChange('last_name')}
                onBlur={() => setFieldTouched('last_name')}
                placeholder="Last"
                style={styles.inputStyleDouble}
              />
            </View>
            <View style={styles.errorRow}>
              <Text style={styles.formLabel}></Text>
              <Text style={styles.errorDouble}>
                {touched.first_name && errors.first_name &&
                  errors.first_name}
              </Text>
              <Text style={styles.errorDouble}>
                {touched.last_name && errors.last_name &&
                  errors.last_name}
              </Text>
            </View>

            {/* Phone field (1)*/}
            <View style={styles.row}>
              <Text style={styles.formLabel}>Phone</Text>
              <TextInput
                value={values.phone}
                onChangeText={handleChange('phone')}
                onBlur={() => setFieldTouched('phone')}
                placeholder="Phone"
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.errorRow}>
              <Text style={styles.formLabel}></Text>
              <Text style={styles.error}>
                {touched.phone && errors.phone &&
                  errors.phone}
              </Text>
            </View>

            {/* Email field (1) */}
            <View style={styles.row}>
              <Text style={styles.formLabel}>Email</Text>
              <TextInput
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="Email"
                autoCapitalize='none'
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.errorRow}>
              <Text style={styles.formLabel}></Text>
              <Text style={styles.error}>
                {touched.email && errors.email &&
                  errors.email}
              </Text>
            </View>

            {/* Address field (1) */}
            <View style={styles.row}>
              <Text style={styles.formLabel}>Address</Text>
              <TextInput
                value={values.address}
                onChangeText={handleChange('address')}
                onBlur={() => setFieldTouched('address')}
                placeholder="Street Address"
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.errorRow}>
              <Text style={styles.formLabel}></Text>
              <Text style={styles.error}>
                {touched.address && errors.address &&
                  errors.address}
              </Text>
            </View>

            {/* City field (1) */}
            <View style={styles.row}>
              <Text style={styles.formLabel}></Text>
              <TextInput
                value={values.city}
                onChangeText={handleChange('city')}
                onBlur={() => setFieldTouched('city')}
                placeholder="City"
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.errorRow}>
              <Text style={styles.formLabel}></Text>
              <Text style={styles.error}>
                {touched.city && errors.city &&
                  errors.city}
              </Text>
            </View>

            {/* State/Zip field (2) */}
            <View style={styles.row}>
              <Text style={styles.formLabel}></Text>
              <TextInput
                value={values.state}
                onChangeText={handleChange('state')}
                onBlur={() => setFieldTouched('state')}
                placeholder="State"
                style={styles.inputStyleDouble}
              />
              <TextInput
                value={values.zip}
                onChangeText={handleChange('zip')}
                onBlur={() => setFieldTouched('zip')}
                placeholder="Zipcode"
                style={styles.inputStyleDouble}
              />
            </View>
            <View style={styles.errorRow}>
              <Text style={styles.formLabel}></Text>
              <Text style={styles.errorDouble}>
                {touched.state && errors.state &&
                  errors.state}
              </Text>
              <Text style={styles.errorDouble}>
                {touched.zip && errors.zip &&
                  errors.zip}
              </Text>
            </View>

            {/* Photo field (1) */}
            <View style={styles.row}>
              <Text style={styles.formLabel}>Photo</Text>
              <TextInput
                value={values.photo}
                onChangeText={handleChange('photo')}
                onBlur={() => setFieldTouched('photo')}
                placeholder="URL to hosted image"
                autoCapitalize='none'
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.errorRow}>
              <Text style={styles.formLabel}></Text>
              <Text style={styles.error}>
                {touched.photo && errors.photo &&
                  errors.photo}
              </Text>
            </View>

            {/* Notes field (1) */}
            <View style={styles.row}>
              <Text style={styles.formLabel}>Notes</Text>
              <TextInput
                value={values.notes}
                onChangeText={handleChange('notes')}
                onBlur={() => setFieldTouched('notes')}
                placeholder="Any additional notes..."
                style={styles.inputStyle}
              />
            </View>
            <View style={styles.errorRow}>
              <Text style={styles.formLabel}></Text>
              <Text style={styles.error}>
                {touched.notes && errors.notes &&
                  errors.notes}
              </Text>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.submitButton}
              >
                <Text style={{color: '#fff', fontSize: 16}}>Submit</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
      )}
    </Formik>
  )
}