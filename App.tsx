import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 30,
  },
  button: {
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexWrap: 'wrap',
  },
});

const Screen = ({route}) => {
  const {id} = route.params;
  return (
    <View style={[styles.screenContainer]}>
      <Text style={styles.text}>SCREEN {id}</Text>
    </View>
  );
};

export function SimpleTab({children, onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{padding: 10}}>
      <Text style={{fontSize: 30, color: 'white'}}>{children}</Text>
    </TouchableOpacity>
  );
}

const ROUTES = ['Screen0', 'Screen1', 'Screen2', 'Screen3'];

function Menu() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'green', flexDirection: 'row'}}>
      {ROUTES.map((route, id) => (
        <SimpleTab
          key={route}
          onPress={() => {
            navigation.navigate(route, {id});
          }}>
          {route}
        </SimpleTab>
      ))}
    </View>
  );
}

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Screen0"
      screenOptions={{
        headerMode: 'float',
        header: () => <Menu />,
      }}>
      <Stack.Screen name="Screen0" component={Screen} initialParams={{id: 0}} />
      <Stack.Screen name="Screen1" component={Screen} />
      <Stack.Screen name="Screen2" component={Screen} />
      <Stack.Screen name="Screen3" component={Screen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
