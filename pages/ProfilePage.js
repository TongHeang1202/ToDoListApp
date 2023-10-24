import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView, TouchableHighlight} from 'react-native';


export default function ProfilePage() {
    const fname = 'Heang'
    const lname = 'Tong'
    const email = 'test@test.com'
    const phone = '12433248'

    const logout = () => {

    }

    const changePage = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>

                <View style={styles.profilePic}>
                    <Image source={require('../assets/favicon.png')}/>
                </View>
                
                <Text style={styles.title}>{fname} {lname}</Text>
                <Text style={styles.title}>{email}</Text>
                <Text style={styles.title}>{phone}</Text>

                <TouchableHighlight onPress={logout}>
                    <View style={styles.logoutButton}><Text style={styles.title}>Logout</Text></View>
                </TouchableHighlight>
            </View>



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