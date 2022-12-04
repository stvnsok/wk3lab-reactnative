import { StatusBar } from 'expo-status-bar';
import Fact from './Fact';  
import Items from './Items';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  FlatList,
  Alert,

} from 'react-native';

export default function App() {

  return (

    <View style={styles.container}>
      <View>
        <FlatList 
          data = {Fact}
          renderItem = {({item}) => <Items item={item}/>}
          horizontal
          showsHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          
        />
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
