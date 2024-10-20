import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { containerStyles } from '@/components/styles';
import { VStack } from '@/components/ui/vstack';

export default function LoadView() {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();

    animationRef.current?.play(30, 120);
  }, []);

  return (
    <VStack style={containerStyles.mainCentralContainer}>
      <LottieView
        ref={animationRef}
        source={require('../assets/animations/loadAnimation.json')}
        style={{ width: '100%', height: '100%' }}
      />
    </VStack>
  );
}
