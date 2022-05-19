import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';
import Home from "./navigation/screens/Home";
import Services from "./navigation/screens/Services";


export default function App() {
  return <RootNavigation />


      //<Services />
      //
      //
      // <Home/>


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
