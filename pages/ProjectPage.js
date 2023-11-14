import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput , Image, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import supabase from '../supabase'

export default ProjectPage = props => {
    const project_id = props.projectId
    const team_id = props.teamId
    const [currentPage, setCurrentPage] = props.function;

    const [project, setProject] = React.useState([])
    const [projectSuccess, setProjectSuccess] = React.useState(null)
    
    const [taskList, setTaskList] = React.useState([])
    const [taskSuccess, setTaskSuccess] = React.useState(null)
    useEffect(() => {
        const fetchData = async () => {
            let { data: projects, errorProj } = await supabase
            .from('projects')
            .select()
            .eq('id', project_id)
            
            if (projects){
                setProject(projects)
                setProjectSuccess(true)
            } 
            

            let { data: tasks, errorTask } = await supabase
            .from('tasks')
            .select(`
                *,
                projects!inner(
                    id
                )
            `)
            .eq('projects.id', project_id)
            
            if (tasks){
                setTaskList(tasks)
                setTaskSuccess(true)
            } 


        }
        fetchData()
    }, [])
    
    let displayProjectName = ''
    if (projectSuccess){
        displayProjectName = project[0].name;
    }

    const projectName = 'Homework'
    
    let tasksIncomplete = []
    let tasksComplete = []
    for (let i=0; i<taskList.length; i++){
        if (!taskList[i].status){
            tasksIncomplete.push(
                <View key={taskList[i].id} style={styles.item}>
                    <Text style={styles.itemText}>
                        {taskList[i].desc}
                    </Text>

                    <TouchableHighlight  style={styles.check} onPress={() => completeTask(taskList[i].id)}>
                        <View style={styles.check}>
                            <Text>Complete</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        }
        else{
            tasksComplete.push(
                <View key={taskList[i].id} style={styles.item}>
                    <Text style={styles.itemText}>
                        {taskList[i].desc}
                    </Text>
                </View>
            );
        }
    }

    
    const [addTaskName, onChangeAddTaskName] = React.useState('')
    const [taskNameError, onChangeTaskNameError] = React.useState('')
    const addTask = async () => {
        let valid = true;
        if (addTaskName === ''){
            valid = false;
            onChangeTaskNameError('Enter a task Name')
        } 

        if (valid){
            let teamInsert = team_id
            if (team_id === -1) teamInsert = 1

            const { data, error } = await supabase
            .from('tasks')
            .insert([
            { desc: addTaskName, project_id: project_id, team_id: teamInsert, status: false}
            ])
            .select()

            if (error) throw error;
            onChangeAddTaskName('')
            onChangeTaskNameError('')
        }
    }   

    completeTask = async (id) => {
        const { data, error } = await supabase
        .from('tasks')
        .update({ status: true })
        .eq('id', id)
        .select()

    }
    
    const goBack = () => {
        if (team_id === -1) setCurrentPage('Overview')
        else setCurrentPage('TeamPage')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <TouchableHighlight style={styles.buttonContainer} onPress={() => goBack()}>
                    <View>
                        <Text style={styles.buttonText}>Go Back</Text>
                    </View>
                </TouchableHighlight>

                <Text style={styles.title}>{displayProjectName}</Text>

                <TextInput 
                    onChangeText={onChangeAddTaskName}
                    style={styles.input}
                    placeholder='Task Name'
                    value={addTaskName}
                />
                <Text style={styles.error}>{taskNameError}</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={addTask}>
                    <View >
                        <Text style={styles.buttonText}>Add Task</Text>
                    </View>
                </TouchableOpacity>
                
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
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        fontSize: 25,
    },

    itemText: {
        color: 'white',
        fontSize: 25,
    },

    check: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 40,
        backgroundColor: '#999',
        borderRadius: 5,
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
        width: 120,
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
    error: {
        fontSize: 20,
        color: 'tomato'
    },  
  });