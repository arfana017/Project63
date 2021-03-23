import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import HomeScreen from './screens/HomeScreen';

export default class HomeScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            text: []
        }
    }

    render() {
        return(
            <TextInput
                style = {styles.inputBox}
                onChangeText={text => {
                    this.setState({
                        text: text,
                        isSearchedPressed: false,
                        word: "Loading..."
                        lexicalCategory: '',
                        examples: [],
                        definition: ""
                    })
                }}
            />

            <TouchableOpacity 
                style = {styles.goButton}
                onPress={()=>{
                   this.setState({isSearchPressed: true});
                   this.getWord(this.state.text) 
                }}
            />

        )
    }
}

const styles = StyleSheet.create({
    goButton: {
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
    },
    inputBox: {
        marginTop: 70,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
      }
})