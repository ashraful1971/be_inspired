import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    text: {
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: 22,
      fontFamily: 'Oswald_Regular',
      textAlign: 'center',
    },
  
    author: {
      color: 'yellow',
      textTransform: 'uppercase',
      fontSize: 16,
      fontFamily: 'Oswald_Bold',
      textAlign: 'center',
    }
  });
  
  export default styles;