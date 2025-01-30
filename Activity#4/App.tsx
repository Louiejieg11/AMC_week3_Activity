import React from 'react';
import {StyleSheet, TextInput, Image,View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [contact, onChangeContact] = React.useState('');
  const [value, onChangeText] = React.useState('');



  return (
    <SafeAreaProvider >
    <View style={styles.container}>
    <View style={styles.row}>
      <View style={{marginTop:5, marginLeft:20}}>
      <Image source={{uri: 'https://icons.iconarchive.com/icons/icons-land/vista-people/256/Office-Customer-Male-Light-icon.png'}}
       style={{width: 50, height: 50, marginBottom: 10}}  />
       <Image source={{uri: 'https://icons.iconarchive.com/icons/icons8/windows-8/256/Users-Age-icon.png'}}
       style={{width: 50, height: 50, marginBottom: 20,}} />
       <Image source={{uri: 'https://icons.iconarchive.com/icons/steve/zondicons/256/Location-icon.png'}}
       style={{width: 50, height: 50,marginBottom: 20}} />
       <Image source={{uri: 'https://icons.iconarchive.com/icons/ionic/ionicons/256/school-icon.png'}}
       style={{width: 50, height: 50,marginBottom: 10}} />
          <Image source={{uri: 'https://th.bing.com/th/id/OIP.9Xc5Xn572bF6umgOImEi6wHaHa?rs=1&pid=ImgDetMain'}}
       style={{width: 50, height: 50,marginBottom: 10}} />
          <Image source={{uri: 'https://static.vecteezy.com/system/resources/previews/010/160/528/original/email-and-mail-icon-sign-symbol-design-free-png.png'}}
          
       style={{width: 50, height: 50,marginBottom: 10}} />
          <Image source={{uri: 'https://th.bing.com/th/id/OIP.V8vyrVsPzvpfXMrpWZWpbQHaHW?rs=1&pid=ImgDetMain'}}
       style={{width: 50, height: 50,marginBottom: 0}} />
          <Image source={{uri: 'https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-help-about-icon.png'}}
       style={{width: 50, height: 50, marginTop: 40}}  />
      </View>
      <View style={styles.column}>
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

         <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={140}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}
          placeholder="About Me:"
        />
      </View>
      </View>
  </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
   textInput: {
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
   row: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%',
   
  },
  column: {
     flex: 1, 
    marginHorizontal: 10, 
  }
});

export default TextInputExample;