import React from "react";
import {
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Text,
  KeyboardAvoidingView
} from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Logo.png")}
      />
      <Form
        onSubmit={values => {
          console.log(values);
          navigation.navigate("Layout");
        }}
        validate={validate.bind(this)}
        render={({ handleSubmit }) => (
          <KeyboardAvoidingView>
            <Field
              name="name"
              render={({ input, meta }) => (
                <View>
                  <TextInput
                    {...input}
                    placeholder="Name"
                    keyboardType="default"
                    value={input.value}
                  />
                  {meta.error && meta.touched && <Text>{meta.error}</Text>}
                </View>
              )}
            />
            <Field
              name="email"
              render={({ input, meta }) => (
                <View>
                  <TextInput
                    {...input}
                    placeholder="Email"
                    keyboardType="default"
                    value={input.value}
                  />
                  {meta.error && meta.touched && <Text>{meta.error}</Text>}
                </View>
              )}
            />
            <Field
              name="password"
              render={({ input, meta }) => (
                <View>
                  <TextInput
                    {...input}
                    placeholder="Name"
                    keyboardType="default"
                    secureTextEntry={true}
                    value={input.value}
                  />
                  {meta.error && meta.touched && <Text>{meta.error}</Text>}
                </View>
              )}
            />
            <TouchableHighlight onPress={handleSubmit}>
              <Text> Sign In</Text>
            </TouchableHighlight>
            <Text>Forgot Password?</Text>
          </KeyboardAvoidingView>
        )}
      />
      <View>
        <View>
          <Text>Or Sign in with:</Text>
        </View>
        <View>
          <Image
            style={styles.icon}
            source={require("../../assets/images/facebook.png")}
          />
          <Image
            style={styles.icon}
            source={require("../../assets/images/google.png")}
          />
        </View>
      </View>
    </View>
  );
};

SignIn.proptypes = {
  navigation: PropTypes.array.isRequired
};

export default SignIn;
