import React from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import {homeStyle} from './style';
import {useSelector} from 'react-redux';
import {FormValuesType} from '../registration';

const HomeScreen = ({navigation}: any) => {
  const {currentUser, users} = useSelector((state: any) => state.users);

  const imagePaths = [
    require('../../assets/Images/portrait.jpg'),
    require('../../assets/Images/portrait2.jpg'),
    require('../../assets/Images/portrait3.jpg'),
    require('../../assets/Images/portrait4.jpg'),
  ];

  const onPressUser = (data: any) => {
    navigation.navigate('UserDetails', data);
  };
  // Combine user data with images
  const combinedData = users.map((user: FormValuesType, index: number) => ({
    ...user,
    imageUrl: imagePaths[index % imagePaths.length],
  }));

  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.imageWrap}>
        <ImageBackground
          source={require('../../assets/Images/background.jpg')}
          style={homeStyle.backgroundImage}>
          <Text style={homeStyle.heading}>Hi, {currentUser.first_name}</Text>
        </ImageBackground>
      </View>
      <View style={homeStyle.detailWrap}>
        <Text>Registered Users</Text>
        {combinedData?.map((res: FormValuesType | any) => (
          <Pressable onPress={() => onPressUser(res)} key={res.first_name}>
            <View style={homeStyle.section}>
              <Image style={homeStyle.profileImage} source={res?.imageUrl} />
              <Text style={homeStyle.data}>{res?.first_name}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
