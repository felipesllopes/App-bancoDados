import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Routes />
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
