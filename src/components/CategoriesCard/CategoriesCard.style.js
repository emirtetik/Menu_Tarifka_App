import { StyleSheet } from 'react-native'
import colors from '../../style/colors'
export default StyleSheet.create({
    container: {
        flex:1,
        borderRadius: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: colors.softgreen,
        flexDirection: 'row',
        margin: 5,
        padding: 1,

    },
    image: {
        resizeMode: 'contain',
        width: 100,
        minHeight: 100,
        backgroundColor: 'colors.darkblue',
        borderRadius: 50,
        
    },
    container_title: {
        flex: 1,
        padding: 10,
        marginTop: 30,
        marginLeft: 10

    },
    title: {
        fontSize: 20,
        color: 'colors.darkblue'
    }
})