//import declarations

declare module '*.png' {
  const content: import('react-native').ImageSourcePropType;
  export default content;
}

declare module '*.jpg' {
  const content: import('react-native').ImageSourcePropType;
  export default content;
}

declare module '*.jpeg' {
  const content: import('react-native').ImageSourcePropType;
  export default content;
}

declare module '*.gif' {
  const content: import('react-native').ImageSourcePropType;
  export default content;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.mp3' {
  const content: number;
  export default content;
}
