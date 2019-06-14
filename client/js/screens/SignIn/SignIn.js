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
        render={({ handleSubmit }) => (
          <KeyboardAvoidingView>
            <Field
              name="name"
              render={({ input, meta }) => (
                <TextInput
                  {...input}
                  placeholder="Name"
                  keyboardType="default"
                  value={input.value}
                />
              )}
            />
            <Field
              name="email"
              render={({ input, meta }) => (
                <TextInput
                  {...input}
                  placeholder="Email"
                  keyboardType="default"
                  value={input.value}
                />
              )}
            />
            <Field
              name="password"
              render={({ input, meta }) => (
                <TextInput
                  {...input}
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  value={input.value}
                />
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
