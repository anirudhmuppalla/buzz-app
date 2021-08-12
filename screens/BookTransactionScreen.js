import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable} from 'react-native';

export default class TransactionScreen extends React.Component{
    render(){
     return(
         <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }}>
        <TouchableOpacity>
        <Text>
            fb
        </Text>
        </TouchableOpacity>  
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
    displayText:{
        fontSize:15,
        textDecorationLine:'underline'
    },
    scanButton:{
        backgroundColor:'red'
    }
  });