import {useWindowDimensions} from 'react-native';

const useLayout = () => {
  const layout = useWindowDimensions();
  const width = layout.width;
  const height = layout.height;
  const scale = layout.scale;
  const fontScale = layout.fontScale;

  return [width, height, scale, fontScale];
};

export default useLayout;
