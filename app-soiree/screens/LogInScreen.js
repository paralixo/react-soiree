import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TextInputBox from '../components/TextInputBox.js'

export default class LogInScreen extends Component {

    static navigationOptions = {
        title: 'Welcome',
    };
    
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text>Bonjour tu es sur LogInScreen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => navigate('Home')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});