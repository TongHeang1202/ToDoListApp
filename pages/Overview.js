import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import supabase from '../supabase'

export default Overview = props => {
    const userId = props.userId;
    const [currentPage, setCurrentPage] = props.function;
    const [projectId, setProjectID] = props.projFunc;
    const [teamId, setTeamID] = props.teamFunc;

    const [projectList, setProjectList] = React.useState([])
    useEffect(() => {
        const fetchProjects = async () => {
            let { data: projects, error } = await supabase
            .from('projects')
            .select()
            .eq('user_id', userId)
            
            if (projects) setProjectList(projects)
        }
        fetchProjects()
    }, [])

    let projectsDisplay = []
    for (let i=0; i<projectList.length; i++){
        projectsDisplay.push(
            <TouchableOpacity key={projectList[i].id} onPress={() => goToProject(projectList[i].id)}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>
                        {projectList[i].name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    
    const [teamList, setTeamList] = React.useState([])
    useEffect(() => {
        const fetchTeams = async () => {

            let { data: teams, error } = await supabase
            .from('teams')
            .select(`
                *,
                team_users!inner (
                    user_id
                )
            `)
            .eq('team_users.user_id', userId)
            
            if (teams) setTeamList(teams)
        }
        fetchTeams()
    }, [])


    let teamsDisplay = []
    for (let i=0; i<teamList.length; i++){
        teamsDisplay.push(
            <TouchableOpacity key={teamList[i].id}  onPress={() => goToTeam(teamList[i].id)}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>
                        {teamList[i].name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    const goToProject = (e) => {
        setProjectID(e)
        changePage('ProjectPage')
    }
    
    const goToTeam = (e) => {
        setTeamID(e)
        changePage('TeamPage')

    }

    const changePage = (e) => {
        setCurrentPage(e)
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.mainView}>
                <View>
                    <View style={styles.listContainer}>
                        <Text style={styles.title}>Projects</Text>
                        <View style={styles.itemContainer}>
                            {projectsDisplay}
                        </View>
                    </View>

                    
                    <View style={styles.listContainer}>
                        <Text style={styles.title}>Teams</Text>
                        <View style={styles.itemContainer}>
                            {teamsDisplay}
                        </View>
                    </View>
                </View>
            </ScrollView>



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