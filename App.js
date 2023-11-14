import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Overview from './pages/Overview';
import ProjectPage from './pages/ProjectPage';
import ProfilePage from './pages/ProfilePage';
import PersonalAdd from './pages/PersonalAdd';
import TeamPage from './pages/TeamPage';
import MembersPage from './pages/MembersPage';
import TeamAdd from './pages/TeamAdd';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState('LoginPage')
  const [userId, setUserID] = React.useState(0)
  const [projectId, setProjectID] = React.useState(0)
  const [teamId, setTeamID] = React.useState(-1)

  const handlePage = (e) => {
    setCurrentPage(e)
  }


  return (
    <>
      {!isLoggedIn && currentPage === 'LoginPage' && <LoginPage userFunc={[userId, setUserID]} function={[currentPage, setCurrentPage]} setIsLogginIn={() => setIsLoggedIn(true)} />}
      
      {isLoggedIn && currentPage === 'Overview' && <Overview userId={userId} projFunc={[projectId, setProjectID]} teamFunc={[teamId, setTeamID]} function={[currentPage, setCurrentPage]} />}
      {currentPage === 'RegisterPage' && <RegisterPage currentPage={currentPage} setCurrentPage={() => handlePage('LoginPage')} />}
      {currentPage === 'ProfilePage' && <ProfilePage userFunc={[userId, setUserID]} function={[currentPage, setCurrentPage]} logoutFunc={[isLoggedIn, setIsLoggedIn]}/>}
      {currentPage === 'PersonalAdd' && <PersonalAdd userId={userId} teamId={teamId} function={[currentPage, setCurrentPage]} />}

      {currentPage === 'ProjectPage' && <ProjectPage teamId={teamId} projectId={projectId} function={[currentPage, setCurrentPage]} />}

      {currentPage === 'TeamPage' && <TeamPage projFunc={[projectId, setProjectID]} teamFunc={[teamId, setTeamID]} function={[currentPage, setCurrentPage]} />}
      {currentPage === 'MembersPage' && <MembersPage teamId={teamId} function={[currentPage, setCurrentPage]} />}
      {currentPage === 'TeamAdd' && <TeamAdd userId={userId} teamId={teamId} function={[currentPage, setCurrentPage]} />}
    </>
  );
}
