import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView, TouchableHighlight} from 'react-native';
import AddProjectForm from '../components/AddProjectForm';
import supabase from '../supabase'

export default PersonalAdd = props => {
    const [currentPage, setCurrentPage] = props.function;
    const userId = props.userId
    const teamId = props.teamId

    const [isCreateProject, setisCreateProject] = React.useState(true)

    const changePage = (e) => {
        setCurrentPage(e)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.createOptionContainer}>
                    <TouchableHighlight onPress={() => setisCreateProject(true)}>
                        <View>
                            <Text style={styles.title}>Create Project</Text>
                        </View>
                    </TouchableHighlight>

                </View>

                <AddProjectForm userId={userId} teamId={teamId} />

            </View>



            {/* footer */}
            <View style={styles.footer}>

                <TouchableHighlight onPress={() => changePage('TeamPage')}>
                    <View style={styles.footerItem}>
                        <Image style={styles.icon} source={require('../assets/file.png')} />
                    </View>
                </TouchableHighlight>


                <TouchableHighlight onPress={() => changePage('TeamAdd')}>
                    <View style={styles.footerItem}>
                        <Image style={styles.icon} source={require('../assets/warning-sign.png')} />
                    </View>
                </TouchableHighlight>


                <TouchableHighlight onPress={() => changePage('MembersPage')}>
                    <View style={styles.footerItem}>
                        <Image style={styles.icon} source={require('../assets/group.png')} />
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

    logoutButton: {
        backgroundColor: 'tomato',
        borderRadius: 25,
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