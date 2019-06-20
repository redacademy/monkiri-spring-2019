import React, { useState } from "react";
import { View, Text, TextInput, Picker } from "react-native";
import { styles } from "./styles";
const Calculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0.01);
  const [period, setPeriod] = useState(6);
  const [time, setTime] = useState(0);
  const [total, setTotal] = useState(0);

  const updateInterest = interest => {
    const interestConvert = interest * 0.01;
    setInterestRate(interestConvert);
  };
  const updatePrincipal = principal => {
    console.log(principal);
    setPrincipal(principal);
  };
  const updatePeriod = period => {
    console.log(period);
    setPeriod(period);
  };
  return (
    <View>
      <View style={styles.principal}>
        <Text>$</Text>
        <TextInput
          style={styles.input}
          onChangeText={updatePrincipal}
          placeholder="Your Principal"
        />
      </View>
      <View style={styles.interest}>
        <TextInput
          style={styles.input}
          onChangeText={updateInterest}
          placeholder="Your Interest"
        />
        <Text>%</Text>
      </View>
      <View>
        <Picker
          selectedValue={period}
          onValueChange={itemValue => updatePeriod(itemValue)}
        >
          <Picker.Item label="Semi-Monthly(24/Yr)" value={24} />
          <Picker.Item label="Monthly(12/Yr)" value={12} />
          <Picker.Item label="Bi-Monthly(6/Yr)" value={6} />
          <Picker.Item label="Quarterly(4/Yr)" value={4} />
          <Picker.Item label="Semi-Annually(2/Yr)" value={2} />
          <Picker.Item label="Annually(1/Yr)" value={1} />
        </Picker>
      </View>
    </View>
  );
};

export default Calculator;
