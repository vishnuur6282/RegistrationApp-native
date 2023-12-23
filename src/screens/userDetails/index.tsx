import React, {useEffect} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {homeStyle} from './style';

interface UserData {
  text: string;
  imagePath: string;
}

const UserDetails = ({route, navigation}: any) => {
  const {currentUser} = useSelector((state: any) => state.users);
  const data = route.params;

  useEffect(() => {
    const userDetail: UserData = {
      text:
        currentUser?.first_name === data.first_name
          ? currentUser?.first_name + ' (You)'
          : data?.first_name,
      imagePath: data.imageUrl,
    };
    navigation.setParams({userDetail});
  }, [navigation]);

  return (
    <View style={homeStyle.container}>
      <ImageBackground
        style={homeStyle.contentBg}
        source={require('../../assets/Images/whatsappbg.jpg')}>
        <View style={homeStyle.userImageWrap}>
          <Text style={homeStyle.heading}>
            {data.first_name} {data.last_name}
          </Text>
        </View>
        <View style={homeStyle.detailWrap}>
          <View style={homeStyle.section}>
            <Text style={homeStyle.label}>First Name:</Text>
            <Text style={homeStyle.data}>{data?.first_name}</Text>
          </View>
          <View style={homeStyle.section}>
            <Text style={homeStyle.label}>Last Name:</Text>
            <Text style={homeStyle.data}>{data?.last_name}</Text>
          </View>
          <View style={homeStyle.section}>
            <Text style={homeStyle.label}>Email:</Text>
            <Text style={homeStyle.data}>{data?.email}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default UserDetails;
