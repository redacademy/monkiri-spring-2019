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
import { setUser } from "../../config/models";

const SignUp = ({ navigation, signUp, setError, toggleLoading }) => {
  return (
    <View style={styles.root}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/Logo.png")}
        />
      </View>
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior="padding"
        enabled
      >
        <Form
          onSubmit={async values => {
            try {
              const response = await signUp({ variables: { ...values } });
              if (response.data.signupUser) {
                const { id, token } = response.data.signupUser;
                toggleLoading();
                await setUser(id, token);
                navigation.navigate("App");
              }
            } catch (e) {
              setError(e);
              return e;
            }
          }}
          validate={validate.bind(this)}
          render={({ handleSubmit }) => (
            <View style={styles.form}>
              <Field
                name="name"
                render={({ input, meta }) => (
                  <View style={styles.formField}>
                    <View style={styles.formInputBackground}>
                      <TextInput
                        style={styles.formInput}
                        {...input}
                        placeholder="Name"
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
              <Field
                name="password"
                render={({ input, meta }) => (
                  <View style={styles.formField}>
                    <View style={styles.formInputBackground}>
                      <TextInput
                        style={styles.formInput}
                        {...input}
                        placeholder="Password"
                        keyboardType="default"
                        autoCapitalize="none"
                        secureTextEntry={true}
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
                style={styles.logInButton}
                onPress={handleSubmit}
              >
                <Text style={styles.LogInText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </KeyboardAvoidingView>
      <View style={styles.contentContainer}>
        <Text style={styles.bodyText}>Or Sign in with:</Text>
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
    </View>
  );
};

SignUp.proptypes = {
  navigation: PropTypes.array.isRequired,
  signUp: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired
};

export default SignUp;
