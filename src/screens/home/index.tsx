import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {homeStyle} from './style';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}: any) => {
  const {currentUser} = useSelector((state: any) => state.users);
  const imagePaths = [
    require('../../assets/Images/portrait.jpg'),
    require('../../assets/Images/portrait2.jpg'),
    require('../../assets/Images/portrait3.jpg'),
    require('../../assets/Images/portrait4.jpg'),
  ];
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const newIndex = Math.floor(Math.random() * imagePaths.length);
    setRandomIndex(newIndex);
  }, [imagePaths]);

  return (
    <View style={homeStyle.container}>
      <View style={homeStyle.imageWrap}>
        <ImageBackground
          source={require('../../assets/Images/background.jpg')}
          style={homeStyle.backgroundImage}>
          <Image style={homeStyle.image} source={imagePaths[randomIndex]} />
          <Text style={homeStyle.heading}>Hi, {currentUser.username}</Text>
        </ImageBackground>
      </View>
      <View style={homeStyle.detailWrap}>
        <View style={homeStyle.section}>
          <Text style={homeStyle.label}>Name:</Text>
          <Text style={homeStyle.data}>{currentUser?.username}</Text>
        </View>
        <View style={homeStyle.section}>
          <Text style={homeStyle.label}>Email:</Text>
          <Text style={homeStyle.data}>{currentUser?.email}</Text>
        </View>
        <View style={homeStyle.section}>
          <Text style={homeStyle.label}>Phone:</Text>
          <Text style={homeStyle.data}>{currentUser.phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
