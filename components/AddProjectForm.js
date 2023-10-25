import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';


export default function AddProjectForm() {
    const [projName, onChangeProjName] = React.useState('');

    const addProject = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                onChange={onChangeProjName}
                style={styles.input}
                placeholder='Project Name'
                value = {projName}
            />
            
            <TouchableOpacity onPress={addProject}>
                <View style={styles.button}><Text style={styles.title}>Create Project</Text></View>
            </TouchableOpacity>
        </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#222',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  
    title: {
      margin: 20,
      color: "#fff",
      fontSize: 25,
      fontWeight: 'bold',
    },

    createOptionContainer: {
        flexDirection: 'row',
    },

    listContainer: {
        width: 400,
    },

    itemContainer: {
        paddingLeft: 10,
        backgroundColor: '#111',
        borderRadius: 25,
        overflow: 'hidden',

    },

    item: {
        margin: 10,
        height: 50,
        justifyContent: 'center',
        color: 'white',
        fontSize: 25,
    },

    itemText: {
        color: 'white',
        fontSize: 25,
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

    icon: {
        width: 50,
        height: 50,
    },

    profilePic: {
        width: 100,
        height: 100,
        margin: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    },

    mainView: {
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#111',
        borderRadius: 25,
        overflow: 'hidden',
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 35,
        width: 410,
        height: 70,
        backgroundColor: 'white',
    },

    footerItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 70,
        backgroundColor: 'white',
    },
  });