import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Overview from './pages/Overview';
import ProjectPage from './pages/ProjectPage';
import ProfilePage from './pages/ProfilePage';
import PersonalCreate from './pages/PersonalCreate';

export default function App() {
  return (
    // <LoginPage />
    // <RegisterPage />
    // <Overview />
    // <ProjectPage />
    // <ProfilePage />
    <PersonalCreate />
  );
}
