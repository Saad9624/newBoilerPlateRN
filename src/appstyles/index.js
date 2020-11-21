import {
    Dimensions,
    StyleSheet
} from 'react-native'
import fonts from '../constants/fonts';


const HEIGHT = Dimensions.get('window').height ;
const WIDHT = Dimensions.get('window').width ;


const AppStyles = StyleSheet.create({

    row:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
    },
    bottom:{
        width:'100%',
        marginVertical:10,
        marginBottom:50,
        marginTop:90
    },
    rowalign:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
        marginVertical:10
    },
    smallImage:{
        width:20,
        height:20,
        resizeMode:'contain',
        marginHorizontal:5
    },
    mediumImage:{
        width:40,
        height:40,
        resizeMode:'contain',
        marginVertical:5,
        alignSelf:'center'
    },
    semiLarge:{
        width:100,
        height:100,
        resizeMode:'contain',
        alignSelf:'center',
    },
    largeImage:{
        width:160,
        height:140,
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:50
    },
    alignBottom:{
        bottom:0,
        position:'absolute',
        marginBottom:20,
        width:'100%'
    },
    pickerItemStyle:{
       fontFamily:fonts.Sofia_Pro_RegularAz ,
       fontSize:20
    },
    line:{
        width:'90%',
        marginVertical:10,
        height:1,
        marginHorizontal:10,
        backgroundColor:'silver'
    }
})

export default AppStyles ; 