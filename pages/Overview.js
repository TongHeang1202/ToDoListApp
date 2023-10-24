import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';


export default function Overview() {
    let projectList = [
        {name: 'wake up', size: 10},
        {name: 'shower', size: 10},
        {name: 'sleep', size: 10}
    ]

    let projects = []
    for (let i=0; i<projectList.length; i++){
        projects.push(
            <TouchableOpacity onPress={goToProject}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>
                        {projectList[i].name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    
    let teamList = [
        {name: 'teamA', urgency: 'urgent'},
        {name: 'teamB', urgency: 'not urgent'},
        {name: 'teamC', urgency: 'very urgent'},
        {name: 'teamB', urgency: 'not urgent'},
        {name: 'teamB', urgency: 'not urgent'},
        {name: 'teamB', urgency: 'not urgent'},
        {name: 'teamB', urgency: 'not urgent'},
        {name: 'teamB', urgency: 'not urgent'},
        {name: 'teamB', urgency: 'not urgent'},
        {name: 'teamB', urgency: 'not urgent'},
        {name: 'teamB', urgency: 'not urgent'},
    ]

    let teams = []
    for (let i=0; i<teamList.length; i++){
        teams.push(
            <TouchableOpacity onPress={goToTeam}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>
                        {teamList[i].name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    const goToProject = () => {

    }
    
    const goToTeam = () => {

    }

    const changePage = () => {

    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.mainView}>
                <View>
                    <View style={styles.listContainer}>
                        <Text style={styles.title}>Projects</Text>
                        <View style={styles.itemContainer}>
                            {projects}
                        </View>
                    </View>

                    
                    <View style={styles.listContainer}>
                        <Text style={styles.title}>Teams</Text>
                        <View style={styles.itemContainer}>
                            {teams}
                        </View>
                    </View>
                </View>
            </ScrollView>



            {/* footer */}
            <View style={styles.footer}>

                <TouchableHighlight onPress={changePage}>
                    <View style={styles.footerItem}>
                        <Image style={styles.icon} source={require('../assets/list.png')} />
                    </View>
                </TouchableHighlight>


                <TouchableHighlight onPress={changePage}>
                    <View style={styles.footerItem}>
                        <Image style={styles.icon} source={require('../assets/plus.png')} />
                    </View>
                </TouchableHighlight>


                <TouchableHighlight onPress={changePage}>
                    <View style={styles.footerItem}>
                        <Image style={styles.icon} source={require('../assets/user.png')} />
                    </View>
                </TouchableHighlight>

            </View>
        </SafeAreaView>
    );
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
      fontSize: 30,
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