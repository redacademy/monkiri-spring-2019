import React from "react";
import { View, Image, TouchableOpacity, TextInput, Text } from "react-native";
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
          navigation.navigate("Layout");
        }}
        validate={validate.bind(this)}
        render={({ handleSubmit }) => (
          <View style={styles.form}>
            <Field
              name="email"
              render={({ input, meta }) => (
                <View style={styles.field}>
                  <TextInput
                    {...input}
                    style={styles.input}
                    placeholder="E-mail"
                    keyboardType="default"
                    value={input.value}
                  />
                  {meta.error && meta.touched && (
                    <Text style={styles.error}>{meta.error}</Text>
                  )}
                </View>
              )}
            />
            <Field
              name="password"
              render={({ input, meta }) => (
                <View style={styles.field}>
                  <TextInput
                    {...input}
                    style={styles.input}
                    placeholder="Password"
                    keyboardType="default"
                    secureTextEntry={true}
                    value={input.value}
                  />
                  {meta.error && meta.touched && (
                    <Text style={styles.error}>{meta.error}</Text>
                  )}
                </View>
              )}
            />
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.btnText}> Log In</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Layout")}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Or Sign in with:</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/images/facebook.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/images/google.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

SignIn.proptypes = {
  navigation: PropTypes.array.isRequired
};

export default SignIn;
