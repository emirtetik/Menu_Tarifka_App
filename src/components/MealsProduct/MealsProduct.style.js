import { StyleSheet,Dimensions } from 'react-native'
import colors from '../../style/colors'

 const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical:5
    
    },
    image: {
        height: deviceSize.height / 3,
        width: deviceSize.width / 1.02,
        resizeMode: 'cover',
        borderRadius: 30,
        
    },
    container_title: {
        padding: 20,
        position: 'absolute',
        top: 172,
        width: deviceSize.width / 1.02,
        height: deviceSize.height / 11,
        backgroundColor: 'rgba(0, 0, 139, 0.5)',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: "flex-end"    
    },
    title: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
        color: colors.softgreen
      
    }

})