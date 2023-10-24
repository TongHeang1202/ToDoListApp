import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';


export default function RegisterPage() {
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


    const handleRegister = () => {
        fname === '' ? setFnameValid(false) : setFnameValid(true);
        lname === '' ? setLnameValid(false) : setLnameValid(true);
        email === '' ? setEmailValid(false) : setEmailValid(true);
        phone === '' ? setPhoneValid(false) : setPhoneValid(true);
        pwd.length < 8 ? setPwdValid(false) : setPwdValid(true);

        let allValid = fnameValid && lnameValid && emailValid && phoneValid && pwdValid;
        if (allValid){
            
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Register</Text>

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
        const bgColor = valid ? 'white' : '#FF7777';
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
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
    button: {
        color: 'white',
    },
})