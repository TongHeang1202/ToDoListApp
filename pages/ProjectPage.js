import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView} from 'react-native';


export default function ProjectPage({projectId}) {
    const projectName = 'Homework'

    const taskList = [
        {id: 1, desc: 'do hw#4', urgency: 'very urgent', projectId: 1, team_id: 1, status: false},
        {id: 1, desc: 'do hw#4', urgency: 'very urgent', projectId: 1, team_id: 1, status: true},
        {id: 1, desc: 'do hw#4', urgency: 'very urgent', projectId: 1, team_id: 1, status: false},
        {id: 1, desc: 'do hw#4', urgency: 'very urgent', projectId: 1, team_id: 1, status: false},
        {id: 1, desc: 'do hw#4', urgency: 'very urgent', projectId: 1, team_id: 1, status: false},
        {id: 1, desc: 'do hw#4', urgency: 'very urgent', projectId: 1, team_id: 1, status: true},
    ]
    
    let tasksIncomplete = []
    let tasksComplete = []
    for (let i=0; i<taskList.length; i++){
        if (!taskList[i].status){
            tasksIncomplete.push(
                <View style={styles.item}>
                    <Text style={styles.itemText}>
                        {taskList[i].desc}
                    </Text>
                </View>
            );
        }
        else{
            tasksComplete.push(
                <View style={styles.item}>
                    <Text style={styles.itemText}>
                        {taskList[i].desc}
                    </Text>
                </View>
            );
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <Text style={styles.title}>{projectName}</Text>
                
                <View style={styles.listContainer}>
                    <Text style={styles.title}>Tasks</Text>
                    <View style={styles.itemContainer}>
                        {tasksIncomplete}
                    </View>
                </View>

                <View style={styles.listContainer}>
                    <Text style={styles.title}>Tasks Completed</Text>
                    <View style={styles.itemContainer}>
                        {tasksComplete}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'scroll',
    },
  
    title: {
      margin: 20,
      color: "#fff",
      fontSize: 40,
      fontWeight: 'bold',
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
  
    buttonContainer: {
      width: 300,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    button: {
      backgroundColor: '#fff',
    },

    icon: {
        width: 50,
        height: 50,
    },

    mainView: {
        flex: 1,
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 35,
        padding: 10,
        width: 410,
        height: 70,
        backgroundColor: 'white',
    },

    footerItem: {
        alignItems: 'center',
        width: 130,
        height: 70,
    },
  });