import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import supabase from '../supabase'

export default function RegisterPage({currentPage, setCurrentPage}) {
    const [fname, onChangeFname] = React.useState('');
    const [lname, onChangeLname] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [phone, onChangePhone] = React.useState('');
    const [pwd, onChangePwd] = React.useState('');

    let [fnameValid, setFnameValid] = React.useState(true);
    let [lnameValid, setLnameValid] = React.useState(true);
    let [emailValid, setEmailValid] = React.useState(true);
    let [phoneValid, setPhoneValid] = React.useState(true);
    let [pwdValid, setPwdValid]  = React.useState(true);


    const handleRegister = async () => {
        let allValid = true;
        setFnameValid(true)
        setLnameValid(false)
        setEmailValid(false)
        setPhoneValid(false)
        setPwdValid(false)

        if (fname === ''){
            allValid = false;
            setFnameValid(false)
        }
        if (lname === ''){
            allValid = false;
            setLnameValid(false)
        }
        if (email === ''){
            allValid = false;
            setEmailValid(false)
        }
        if (phone === ''){
            allValid = false;
            setPhoneValid(false)
        }
        if (pwd === ''){
            allValid = false;
            setPwdValid(false)
        }

        if (allValid){
            const { data, error } = await supabase
              .from('users')
              .insert([
                { first_name: fname, last_name: lname, email: email, phone: phone, password: pwd },
              ])
              .select()
            
            setCurrentPage()
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Register</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.nameContainer}>
                    
                    <TextInput 
                        style={[styles.input(fnameValid), {width: 180}]}
                        onChangeText={onChangeFname}
                        value={fname}
                        placeholder='first name'
                    />
                    <TextInput 
                        style={[styles.input(lnameValid), {width: 180}]}
                        onChangeText={onChangeLname}
                        value={lname}
                        placeholder='last name'
                    />
                </View>

                <TextInput 
                    style={styles.input(emailValid)}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder='email'
                    keyboardType='email-address'
                />
                
                <TextInput 
                    style={styles.input(phoneValid)}
                    onChangeText={onChangePhone}
                    value={phone}
                    placeholder='phone'
                />

                <TextInput 
                    style={styles.input(pwdValid)}
                    onChangeText={onChangePwd}
                    secureTextEntry={true}
                    value={pwd}
                    placeholder='password'
                />

                <Button
                    onPress={handleRegister}
                    style={styles.button}
                    title='Register'
                />

            </View>

            <TouchableHighlight style={styles.buttonContainer} onPress={setCurrentPage}>
                <View>
                    <Text style={styles.buttonText}>Back To Login</Text>
                </View>
            </TouchableHighlight>
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

    inputContainer: {
        width: 400,
        height: 400,
        justifyConten: 'center',
    },

    nameContainer: {
        width: 400,
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    input: (valid) =>{
        let bgColor = 'white'
        if (!valid) bgColor = 'tomato'
    return {
        height: 60,
        margin: 10,
        padding: 20,
        alignContent: 'center',
        color: '#000',
        backgroundColor: bgColor,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 25,
    }
    },

    buttonContainer: {
        width: 200,
        height: 40,
        margin: 12,
        padding: 10,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
  
    buttonText: {
      fontSize: 20,
      color: '#222',
    },
    button: {
        color: 'white',
    },

    icon: {
        backgroundColor: 'red',
        width: 50,
        height: 50,
    },
})