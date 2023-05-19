import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
