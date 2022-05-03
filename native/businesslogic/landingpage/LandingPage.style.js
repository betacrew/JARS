import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'rgba(31, 31, 31, 1)'
    },
    welcomeText: {
        color:'#7BD4FB', 
        fontSize: 30
    },
    imgStyle: {
        height: 120,
        width: 120,
        resizeMode: 'stretch',
    },
    randomStringBox: {
        borderWidth: 2,
        borderColor: '#BE63E5',
        justifyContent: 'center',
        margin: 20
    },
    randomStringText: {
        padding: 5,
        fontSize: 25,
        color: '#fff',
        textAlign: 'center'
    }
  });