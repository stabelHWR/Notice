import React from 'react';
import WelcomeOrRegisterPage from './welcome';

export default function RootLayout() {
  return <WelcomeOrRegisterPage isWelcomePage={true} />;
}
