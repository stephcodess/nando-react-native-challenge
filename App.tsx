import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestauantsListScreen from "./src/screens/RestauantsListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <RestauantsListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
});
