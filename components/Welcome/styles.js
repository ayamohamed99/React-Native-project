import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: Dimensions.get('window').height,
        alignItems: 'center',
    },
    containerall:{
        width: '100%',
        top: '22%',
        alignItems: 'center',
    },
    inputBox: {
        paddingTop:15,
        width: '100%',
        alignItems: 'center',
        paddingVertical:10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
    containerB: {
        width: '100%',
        top: '20%',
        alignItems: 'center',
    },
    buttonlogin: {
        opacity: .7,
        height: 40,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        alignSelf: 'center',
        textAlign: 'center'
    },
    title: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:'center',
    },
    Boxsuptitle:{
        paddingVertical:10,
        width:'100%',
        alignItems:'center'
    },
    suptitle: {
        
        fontSize: 25,
        fontWeight: 'bold',
       
        
    },
    button: {
        fontSize:15,
        color: 'black',
        fontWeight:'bold'
    },
    singup: {
        color:"black",
        paddingVertical: 10,
    },
    input: {
        opacity: .7,
        backgroundColor:'white',
        height: 40,
        width: '70%',
        margin: 12,
        borderRadius: 20,
        padding: 10,
    },
    sigupButton: {
        fontSize:15,
        color: 'black',
        fontWeight:'bold'
    }

});

export default styles;
