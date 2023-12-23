import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {homeStyle} from './style';
import {useSelector} from 'react-redux';

const UserDetails = ({route}: any) => {
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
          <Text style={homeStyle.heading}>{route.params.first_name}</Text>
        </ImageBackground>
      </View>
      <View style={homeStyle.detailWrap}>
        <View style={homeStyle.section}>
          <Text style={homeStyle.label}>Name:</Text>
          <Text style={homeStyle.data}>
            {route.params?.first_name} {route.params?.last_name}
          </Text>
        </View>
        <View style={homeStyle.section}>
          <Text style={homeStyle.label}>Email:</Text>
          <Text style={homeStyle.data}>{route.params?.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;
