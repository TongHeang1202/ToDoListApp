import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import supabase from '../supabase'

export default TeamPage = props => {
    const [currentPage, setCurrentPage] = props.function;
    const [projectId, setProjectID] = props.projFunc;
    const [teamId, setTeamID] = props.teamFunc;

    const [projectList, setProjectList] = React.useState([])
    useEffect(() => {
        const fetchProjects = async () => {
            let { data: projects, error } = await supabase
            .from('projects')
            .select()
            .eq('team_id', teamId)
            
            if (projects) setProjectList(projects)
        }
        fetchProjects()
    }, [])

    let projects = []
    for (let i=0; i<projectList.length; i++){
        projects.push(
            <TouchableOpacity key={projectList[i].id} onPress={() => goToProject(projectList[i].id)}>
                <View style={styles.item}>
                    <Text style={styles.itemText}>
                        {projectList[i].name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    
    const goToProject = (e) => {
        setProjectID(e)
        changePage('ProjectPage')
    }
    
    const changePage = (e) => {
        setCurrentPage(e)
    }

    const leavePage = () => {
        setTeamID(-1)
        setCurrentPage('Overview')
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.mainView}>
                
                <TouchableHighlight style={styles.buttonContainer} onPress={() => leavePage()}>
                    <View>
                        <Text style={styles.buttonText}>Go Back</Text>
                    </View>
                </TouchableHighlight>

                <View>
                    <View style={styles.listContainer}>
                        <Text style={styles.title}>Projects</Text>
                        <View style={styles.itemContainer}>
                            {projects}
                        </View>
                    </View>

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