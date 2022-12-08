import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const inputStyle = StyleSheet.create({
  backgroundColor:"white",
  minWidth:150,
  padding:15,
  borderRadius:30
})

const buttonStyle = StyleSheet.create({
  backgroundColor:"rgb(134,239,172)",
  padding:15,
  borderRadius:30,
  maxWidth:100,
})

const gap = 8;

const stilo = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: (gap / -2),
  },
  child: {
    marginVertical: gap / 2,
  },
});

const HomeScreen = (props) => {

  const navigate = useNavigation()

  const createGame = () =>{
    navigate.navigate("CreateGame")
  }

  const joinGame = () =>{
    navigate.navigate("JoinGame")
  }

  return (

    <View style={styles.container}>
      <Text>Play Crazy 8's with friends!</Text>
      <View style={{display:"inline-flex",flexWrap: "wrap", padding:10, marginTop:-12,marginRight:0,marginBottom:0,marginLeft:-12}}>
        <Pressable onPress={createGame} style={{backgroundColor:"lightblue",paddingVertical:15,paddingHorizontal:15,borderRadius:30}}>
          <Text>Create Game</Text>
        </Pressable>
        <Pressable onPress={joinGame} style={buttonStyle}>
          <Text>Join Game</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const JoinGame = () =>{
  return(
    <View style={stilo.container}>
      <Text style={stilo.child}>This is joing game </Text>
        <TextInput placeholder="Username" style={stilo.child}></TextInput>
        <TextInput placeholder="Room Code" style={stilo.child}></TextInput>
        <Pressable style={buttonStyle}><Text>Join Game</Text></Pressable>
    </View>

  )
}

const CreateGame = () => {
  return (
    <View>
      <Text>This is Create Game screen</Text>
    </View>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"Crazy 8s"}} navigation={Stack}/>
        <Stack.Screen name="CreateGame" component={CreateGame} options={{title:"Create Game"}} navigation={Stack}/>
        <Stack.Screen name="JoinGame" component={JoinGame} options={{title:"Join Game"}} navigation={Stack}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
