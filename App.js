import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function App() {
  return (
    <Formik>
      <View style={styles.wrapper}>
        <StatusBar style='light' />

        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up</Text>

          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputStyle} placeholder='Full Name' />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputStyle} placeholder='Email Address' />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputStyle} placeholder='Password' />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputStyle}
              placeholder='Confirm Password'
            />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputStyle} placeholder='Mobile Number' />
          </View>

          <TouchableOpacity onPress={() => {}} style={styles.submitBtn}>
            <Text style={styles.submitBtnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Formik>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3333',
    paddingHorizontal: 15,
  },
  formContainer: {
    backgroundColor: '#f5eddc',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  title: {
    color: '#16213e',
    fontSize: 26,
    fontWeight: '400',
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputStyle: {
    borderColor: '#16213e',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  errorTxt: {
    fontSize: 12,
    color: '#ff0d10',
  },
  submitBtn: {
    backgroundColor: '#395b64',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  submitBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
