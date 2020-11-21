import React from 'react';

import {
    View,
    Text
} from 'react-native' ;
import fonts from '../../../constants/fonts';

class Login extends React.Component{


    render(){
        return(
            <View>
                <Text style={{fontFamily:fonts.Georgia}}>Login</Text>
            </View>
        )
    }
}
export default Login ;