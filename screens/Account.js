import { View, Text,StatusBar } from 'react-native'
import React from 'react';

import colors from '../colors';

const Account = () => {
  return (
    <View>
        <StatusBar
        barStyle='light-content'
        backgroundColor={colors.green}
        translucent
        />
      <Text>Account</Text>
    </View>
  )
}

export default Account