import React, {Component} from 'react';
import {createAppContainer} from "react-navigation";
import { View, Text, Button } from 'react-native';
import AboutScreen from './AboutScreen';
import {createStackNavigator } from 'react-navigation-stack';
import FAIcon from 'react-native-vector-icons/FontAwesome';

class MenuNavBar extends Component {
    render(){
        return(
            <View style={{ flex:1, flexDirection: "column"}}>
                <View style={{ flex: 1, justifyContent: 'center', 
                        flexDirection: 'row',
                        borderBottomColor: 'black',
                        borderBottomWidth: 1, }}>
                    <Text>Ninja Home</Text>
                    <Button
                    title="Ninja Home"
                    onPress={() => this.props.navigation.navigate('Ninja Home')}
                    />
                </View>
                
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row',borderBottomColor: 'black',
                        borderBottomWidth: 1,  }}>
                    <Text>Task Screen</Text>
                    <Button
                    title="Task Screen"
                    onPress={() => this.props.navigation.navigate('Task')}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row',borderBottomColor: 'black',
                        borderBottomWidth: 1,  }}>
                    <Text>Ninja Bio</Text>
                    <FAIcon
                        name="user"
                        size={30}
                        color='#0091EA'
                        />
                    <Button
                    title="Ninja Bio"
                    onPress={() => this.props.navigation.navigate('Ninja')}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row',borderBottomColor: 'black',
                        borderBottomWidth: 1,  }}>
                    <Text>About Screen</Text>
                    <Button
                    title="About"
                    onPress={() => this.props.navigation.navigate('About')}
                    />
                </View>
                
            </View>
        )
    }
}

export default MenuNavBar;