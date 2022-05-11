import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './app/screens/Home';

const App = () => {
  return (
    <SafeAreaView>
      <NativeBaseProvider>
        <StatusBar />
        <Home />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
