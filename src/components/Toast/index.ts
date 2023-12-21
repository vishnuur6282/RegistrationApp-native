import {ToastAndroid} from 'react-native';

const showToast = (text: string) => {
  ToastAndroid.showWithGravityAndOffset(
    text,
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
};

export default showToast;
