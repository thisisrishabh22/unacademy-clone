import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import useLayout from '../../hooks/useLayout';
import {Box, Button, Center, Heading, Text} from 'native-base';

const Home = () => {
  const [width, height] = useLayout();
  return (
    <View style={[styles.container, {height: height}]}>
      <Image
        source={require('../../assets/home.png')}
        style={[{...styles.homeImage}, {width: width, height: '70%'}]}
      />
      <Box flex={1} justifyContent={'flex-end'} px={4}>
        <Heading size="xl" my={2} color={'white'} fontWeight={'medium'}>
          Start Learning on Unacademy
        </Heading>
        <Text fontSize="lg" my={2} color={'white'}>
          India's Smallest learning platform
        </Text>
        <Center height={'30%'}>
          <Button
            py={3}
            android_ripple={{radius: 200}}
            width={'100%'}
            backgroundColor={'#92E3A9'}
            fontSize="lg"
            borderRadius={10}>
            Get Started
          </Button>
        </Center>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#407BFF',
  },
  homeImage: {
    backgroundColor: '#407BFF',
  },
});

export default Home;
