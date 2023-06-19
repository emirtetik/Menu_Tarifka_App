import { StyleSheet,Dimensions } from 'react-native'
import colors from '../../style/colors'

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        marginVertical: 10,
        
    },
    image: {
        width: deviceSize.width/1,
        height: deviceSize.height /2,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    body_container: {
        margin: 10,
        
    },
    header: {
        color: colors.darkblue,
        fontSize: 30,
        fontWeight: 'bold'
    },
    country: {
        color: colors.darkblue,
        fontSize: 22,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        paddingBottom:5,
        borderColor: 'gray'
    },
    text: {
        paddingVertical: 8,
        fontSize: 15,
        paddingBottom: 30,
        color: 'black',
    },
    button: {
        paddingVertical: 10,
        alignItems: 'center',
        width: deviceSize.width / 1.5,
        backgroundColor: colors.darkblue,
        marginLeft: 60,
        borderRadius: 10,
        borderWidth: 3,
        
        
    },
    text_button: {
        color: colors.softgreen,
        fontWeight: 'bold'
    }

}
)  