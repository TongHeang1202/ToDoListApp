import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import supabase from '../supabase'

export default MembersPage = props => {
    const [currentPage, setCurrentPage] = props.function;
    const teamId = props.teamId
    
    const [memberList, setMemberList] = React.useState([])
    useEffect(() => {
        const fetchMembers = async () => {
            let { data: members, error } = await supabase
            .from('team_users')
            .select(`
                user_id, id,
                teams!inner(id),
                users!inner(id, first_name, last_name)
            `)
            .eq('teams.id', teamId)
            
            if (members) setMemberList(members)
        }
        fetchMembers()
    }, [])

    let members = []
    for (let i=0; i<memberList.length; i++){
        members.push(
            <View key={memberList[i].id} style={styles.item}>
                <Text style={styles.itemText}>
                    {memberList[i].users.first_name} {memberList[i].users.last_name}
                </Text>
            </View>
        );
    }

    
    const changePage = (e) => {
        setCurrentPage(e)
    }


    const [email, onChangeEmail] = React.useState('')
    const [emailError, onChangeEmailError] = React.useState('')
    const addMember = async (e) => {
        let valid = true
        if (email === '') valid = false

        if (valid) {
            let { data: users, errorEmail } = await supabase
            .from('users')
            .select('id')
            .eq('email', email)

            if (errorEmail) throw error;
            if (users.length === 0) onChangeEmailError('User does not exist')
            else {
                let { data: team_users, errorTeamUser } = await supabase
                .from('team_users')
                .select('id')
                .eq('user_id', users[0].id)
                .eq('team_id', teamId)
                
                if (errorTeamUser) throw error;
                if (team_users.length > 0) onChangeEmailError('User already in team')
                else {
                    const { data, error } = await supabase
                    .from('team_users')
                    .insert([
                    { team_id: teamId, user_id: users[0].id, is_manager: false },
                    ])
                    .select()

                    onChangeEmail('')
                    onChangeEmailError('')
                }
            }
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.mainView}>
                <View style={styles.listContainer}>
                    <Text style={styles.title}>Member</Text>
                    <View style={styles.itemContainer}>
                        {members}
                    </View>

                    <TextInput 
                        onChangeText={onChangeEmail}
                        style={styles.input}
                        placeholder='Member Email'
                        value={email}
                    />
                    <Text style={styles.error}>{emailError}</Text>
                    <TouchableHighlight style={styles.buttonContainer} onPress={() => addMember()}>
                        <View>
                            <Text style={styles.buttonText}>Add new member</Text>
                        </View>
                    </TouchableHighlight>
                    

                </View>
            </ScrollView>



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
        width: 180,
        height: 40,
        margin: 12,
      backgroundColor: '#444',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
  
    buttonText: {
      fontSize: 20,
      color: 'white',
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

    error: {
        fontSize: 20,
        color: 'tomato'
    },  
  });