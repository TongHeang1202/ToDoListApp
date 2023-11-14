import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import supabase from '../supabase'

export default LoginPage = props => {
  const [currentPage, setCurrentPage] = props.function;
  const [userId, setUserID] = props.userFunc;

  const [email, onChangeEmail] = React.useState('');
  const [pwd, onChangePwd] = React.useState('');
  const [fail, setFail] = React.useState(false);

  const [foundUser, setFoundUser] = React.useState(null);

  const login = async () => {
    setFail(false);
    let valid = true;
    if (email === '' || pwd === '') valid = false;

    let { data: users, error } = await supabase
    .from('users')
    .select()
    .eq('email', email)
    .eq('password', pwd)
    
    if (!users.length) valid = false;

    if (valid){
        setUserID(users[0].id)
        props.setIsLogginIn()
        setCurrentPage('Overview')
    }
    else{
      setFail(true)
    }
  }

  const goToRegister = () => {
    if (currentPage === 'LoginPage'){
      setCurrentPage('RegisterPage');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To-Do List App</Text>

      <TextInput 
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder='email'
        keyboardType='email-address'
      />
      <TextInput 
        style={styles.input}
        onChangeText={onChangePwd}
        secureTextEntry={true}
        value={pwd}
        placeholder='password'
      />

      <Text style={styles.fail(fail)}>Incorrect Email or Password</Text>

      <View style={styles.buttonContainer}>

        <Button
            onPress={login}
          style={styles.button}
          title='Login'
        />

        <Button
          onPress={goToRegister}
          style={styles.button}
          title='Register'
        />

      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    margin: 30,
    color: "#fff",
    fontSize: 40,
    fontWeight: 'bold',
  },

  input: {
    width: 300,
    height: 60,
    margin: 12,
    padding: 20,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 25,
  },

  fail: (fail) => {
    const color = fail ? 'tomato' : '#222';
    return {
        height: 20,
        color: color,
        marginBottom: 20,
        fontSize: 20,
    }
  },

  buttonContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: '#fff',
  },
});
