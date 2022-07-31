import React from 'react';
import { ImageBackground, View ,Dimensions, ScrollView} from 'react-native';
import { scale } from 'react-native-size-matters';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ShowImage =(props) => {
  return (
      <ScrollView>
    <View>
        <ImageBackground 
        source={props.route.params.url} 
        style={{height : deviceHeight - 100, width : deviceWidth - 80 }}/>
    </View>
    </ScrollView>
  )
}

export default ShowImage