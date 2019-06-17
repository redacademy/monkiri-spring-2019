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

const SignIn = ({ navigation, signIn, setError, toggleLoading }) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/Logo.png")}
      />
      <KeyboardAvoidingView style={styles.form} behavior="padding" enabled>
        <Form
          onSubmit={async values => {
            try {
              const response = await signIn({ variables: { ...values } });
              if (response.data.authenticateUser) {
                const { id, token } = response.data.authenticateUser;
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
            <View style={styles.inputFields}>
              <Field
                name="email"
                render={({ input, meta }) => (
                  <View style={styles.field}>
                    <View style={styles.inputBackground}>
                      <TextInput
                        style={styles.input}
                        {...input}
                        placeholder="E-mail"
                        keyboardType="default"
                        value={input.value}
                      />
                    </View>
                    <View>
                      {meta.error && meta.touched && (
                        <Text style={styles.error}>{meta.error}</Text>
                      )}
                    </View>
                  </View>
                )}
              />
              <Field
                name="password"
                render={({ input, meta }) => (
                  <View style={styles.field}>
                    <View style={styles.inputBackground}>
                      <TextInput
                        style={styles.input}
                        {...input}
                        placeholder="Password"
                        keyboardType="default"
                        secureTextEntry={true}
                        value={input.value}
                      />
                    </View>
                    <View>
                      {meta.error && meta.touched && (
                        <Text style={styles.error}>{meta.error}</Text>
                      )}
                    </View>
                  </View>
                )}
              />
              <TouchableOpacity
                style={styles.logInButton}
                onPress={handleSubmit}
              >
                <Text style={styles.LogInText}>Log In</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </KeyboardAvoidingView>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate("App")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
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
    </View>
  );
};

SignIn.proptypes = {
  navigation: PropTypes.array.isRequired,
  signIn: PropTypes.func.isRequired
};

export default SignIn;
