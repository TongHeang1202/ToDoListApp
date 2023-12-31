import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView, TouchableHighlight} from 'react-native';
import supabase from '../supabase'

export default ProfilePage = props => {
    const [currentPage, setCurrentPage] = props.function;
    const [isLoggedIn, setIsLoggedIn] = props.logoutFunc;
    const [userId, setUserID] = props.userFunc;

    
    const [user, setUser] = React.useState([])
    const [userSuccess, setUserSuccess] = React.useState(null)
    useEffect(() => {
        const fetchData = async () => {
            let { data: users, errorProj } = await supabase
            .from('users')
            .select('first_name, email, last_name, phone')
            .eq('id', userId)
            
            if (users){
                setUser(users)
                setUserSuccess(true)
            } 
        }
        fetchData()
    }, [])

    let fname = ''
    let lname = ''
    let email = ''
    let phone = ''

    if (userSuccess){
        fname = user[0].first_name
        lname = user[0].last_name
        email = user[0].email
        phone = user[0].phone
    }


    const logout = () => {
        setUserID(0)
        setIsLoggedIn(false)
        setCurrentPage('LoginPage')
    }

    const changePage = (e) => {
        setCurrentPage(e)
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

                <TouchableHighlight onPress={() => logout()}>
                    <View style={styles.logoutButton}><Text style={styles.title}>Logout</Text></View>
                </TouchableHighlight>
            </View>



            {/* footer */}
            <View style={styles.footer}>

                <TouchableHighlight onPress={() => changePage('Overview')}>
                    <View style={styles.footerItem}>
                        <Image style={styles.icon} source={require('../assets/list.png')} />
                    </View>
                </TouchableHighlight>


                <TouchableHighlight onPress={() => changePage('PersonalAdd')}>
                    <View style={styles.footerItem}>
                        <Image style={styles.icon} source={require('../assets/plus.png')} />
                    </View>
                </TouchableHighlight>


                <TouchableHighlight onPress={() => changePage('ProfilePage')}>
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
      fontSize: 20,
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