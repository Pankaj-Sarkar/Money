import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from '../components/bits/HeaderLeft/Menu';
import AddMoney from '../components/bits/HeaderRight/AddMoney';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Send from '../screens/Send';
import Request from '../screens/Request';
import Back from '../components/bits/HeaderLeft/Back';
import styles from './routes.style';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: 'transparent'
                },
            }}>
                <Stack.Screen
                    name="welcome"
                    component={Splash}
                    options={{
                        headerShown: false,
                        animation: 'slide_from_right',
                        gestureEnabled: true
                    }}
                />
                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{
                        headerTitle: "Hello Sandra,",
                        headerTitleStyle: styles.title,
                        headerStyle: {
                            backgroundColor: '#010A43'
                        },
                        headerLeft: props => <Menu {...props} />,
                        headerRight: props => <AddMoney {...props} />
                    }}
                />
                <Stack.Screen
                    name="request"
                    component={Request}
                    options={({ navigation }) => ({
                        headerTitle: "New Request",
                        headerTitleStyle: {
                            ...styles.title,
                            color: '#D7C9C9',
                        },
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerLeft: props => <Back {...props} navigation={navigation} />
                    })}
                />
                <Stack.Screen
                    name="send"
                    component={Send}
                    options={({ navigation }) => ({
                        headerTitle: "Send Money",
                        headerTitleStyle: {
                            ...styles.title,
                            color: '#D7C9C9',
                        },
                        headerTitleAlign: 'center',
                        headerTransparent: true,
                        headerLeft: props => <Back {...props} navigation={navigation} />
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;