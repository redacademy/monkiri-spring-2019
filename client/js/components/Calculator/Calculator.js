import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import * as Progress from "react-native-progress";
import Slider from "@react-native-community/slider";
import theme from "../../config/styles";
import { styles } from "./styles";
const Calculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [period, setPeriod] = useState(4);
  const [time, setTime] = useState(1);
  const [total, setTotal] = useState("");
  const [isSumbit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const focusRef = useRef();
  const scrollRef = useRef();
  const { width, height } = Dimensions.get("window");

  const updateTime = time => {
    const intTime = Math.floor(time);
    setTime(intTime);
  };
  const updateInterest = interest => {
    setInterestRate(interest);
  };
  const updatePrincipal = principal => {
    setPrincipal(principal);
  };
  const updatePeriod = period => {
    setPeriod(period);
  };
  const calculateInterest = (principal, interestRate, period, time) => {
    setIsSubmit(true);
    const pow = Math.pow(1 + (interestRate * 0.01) / period, period * time);
    const result = Number.parseFloat(principal * pow).toFixed(2);
    if (isNaN(result)) {
      setIsError(true);
      setTimeout(() => {
        scrollRef.current.scrollToEnd({ animated: true });
      }, 10);
    } else {
      setIsError(false);
      setTotal(result);
      setTimeout(() => {
        scrollRef.current.scrollToEnd({ animated: true });
      }, 10);
    }
  };

  const convertPeriod = period => {
    if (period === 1) {
      return "Annually";
    } else if (period === 2) {
      return "Semi-Annually";
    } else if (period === 4) {
      return "Quarterly";
    } else if (period === 6) {
      return "Bi-Monthly";
    } else if (period === 12) {
      return "Monthly";
    } else if (period === 24) {
      return "Semi-Monthly";
    }
  };
  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.content}
      ref={scrollRef}
    >
      <View style={styles.processContainer}>
        <Text style={styles.header}> Compound Interest Calculator </Text>
        <Progress.Bar
          style={styles.processBar}
          progress={0.75}
          width={0.7 * width}
          color={theme.colors.skyBlue}
        />
        <Text style={styles.checkin}>Try it!</Text>
      </View>
      <View style={styles.principal}>
        <Text style={styles.title}>Your Principal:</Text>
        <Text> $ </Text>
        <TextInput
          value={principal}
          style={styles.input}
          onChangeText={updatePrincipal}
          placeholder="Your Principal"
          ref={focusRef}
        />
      </View>
      <View style={styles.interest}>
        <Text style={styles.title}>Your Interest: </Text>
        <TextInput
          value={interestRate}
          style={styles.input}
          onChangeText={updateInterest}
          placeholder="Your Interest"
        />
        <Text> %</Text>
      </View>
      <View style={styles.compound}>
        <Text style={styles.title}>Interest is compounded: </Text>
        <Picker
          selectedValue={period}
          onValueChange={itemValue => updatePeriod(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Semi-Monthly(24/Yr)" value={24} />
          <Picker.Item label="Monthly(12/Yr)" value={12} />
          <Picker.Item label="Bi-Monthly(6/Yr)" value={6} />
          <Picker.Item label="Quarterly(4/Yr)" value={4} />
          <Picker.Item label="Semi-Annually(2/Yr)" value={2} />
          <Picker.Item label="Annually(1/Yr)" value={1} />
        </Picker>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.title}>Years to grow: </Text>
        <Text style={styles.sliderTitle}>Year:{time}</Text>
        <View style={styles.sliderContent}>
          <Text>0</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={50}
            maximumTrackTintColor={theme.colors.seaBlue}
            onValueChange={updateTime}
            value={time}
          />
          <Text>50</Text>
        </View>
      </View>
      <View style={styles.result}>
        <TouchableOpacity
          onPress={() =>
            calculateInterest(principal, interestRate, period, time)
          }
        >
          <Text style={styles.button}>Calculate</Text>
        </TouchableOpacity>
        {/* {isError?<Text style={styles.title}>Invalid Input!</Text>} */}
        {isSumbit && !isError ? (
          <View>
            <Text style={styles.title}>
              RESULT: Your initial investment of
              <Text style={styles.highlight}> ${principal}</Text> at an
              annualized interest rate of
              <Text style={styles.highlight}> {interestRate}%</Text>
              will be worth<Text style={styles.highlight}> ${total} </Text>
              ,after
              <Text style={styles.highlight}> {time} </Text> years when
              compounded
              <Text style={styles.highlight}> {convertPeriod(period)}</Text>.
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[styles.burronShadow, styles.orangeButtonContainer]}
              >
                <Text style={styles.orangeButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : isError ? (
          <Text style={styles.title}>Invalid Input!</Text>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Calculator;
