import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [contact, onChangeContact] = React.useState('');



  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          placeholder="NAME:"
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="AGE:"
          keyboardType="numeric"
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Address:"
          
        />
            <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="SCHOOL:"
        />
            <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="COURSE:"
          
        />
            <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="EMAIL:"
          
        />
            <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}
          placeholder="Contact no:"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;