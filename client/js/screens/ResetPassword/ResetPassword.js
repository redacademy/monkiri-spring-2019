import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";
import { styles } from "./styles";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import validate from "./helpers/validate";

const ResetPassword = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/Logo-2.png")}
        />
      </View>
      <Text style={styles.bodyText}>
        Forgot your password? No problem! Enter in your e-mail and we will send
        you a link to reset your password.
      </Text>
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior="padding"
        enabled
      >
        <Form
          onSubmit={values => console.log(values)}
          validate={validate.bind(this)}
          render={({ handleSubmit }) => (
            <View style={styles.form}>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <View style={styles.formField}>
                    <View style={styles.formInputBackground}>
                      <TextInput
                        style={styles.formInput}
                        {...input}
                        placeholder="E-mail"
                        keyboardType="default"
                        autoCapitalize="none"
                        value={input.value}
                      />
                    </View>
                    <View>
                      {meta.error && meta.touched && (
                        <Text style={styles.errorMessage}>{meta.error}</Text>
                      )}
                    </View>
                  </View>
                )}
              />

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

ResetPassword.proptypes = {
  navigation: PropTypes.array.isRequired
};

export default ResetPassword;
