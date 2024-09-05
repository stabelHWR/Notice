# Frontend Doc

## React Native

React Native is a framework, which allows you to build native mobile apps using JavaScript/TypeScript and React. It's used here to create the core structure of the app for Android and iOS devices, providing cross-platform support.

1. npx create-expo-app@latest
2. isntall expo app in [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
3. look it up for your OS <https://reactnative.dev/docs/set-up-your-environment?platform=android>
4. `cd client/notice`

## Expo

Expo is a development platform that simplifies the setup and testing process of React Native apps. It allows developers to run, preview, and test their app instantly on a physical or virtual device using just a QR code. Expo handles much of the configuration, making the development process easier.

Your development and test device should be in the same network!

1. `npx expo start`
2. Scan the QR Code with your expo app
3. Check if it working
4. Get Started! <https://docs.expo.dev/get-started/start-developing/>

## For optimal dev expirience

Set up prettier and eslint. I have already set up the necessary files, but you still need to do somthing.

1. Install Prettier VS Code extension [Pretter VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and the [ESLint VS Code] extension.(<https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>)
2. Set up your "Workspace Settings" in VS Code

   1. `Cmd+P+Shift`
   2. `Open Workspace Settings (JSON)`
   3. Modify your settings

   ```JSON
       {
           "eslint.validate": [
           "javascript",
           "javascriptreact",
           "typescript",
           "typescriptreact"
           ],
           "editor.codeActionsOnSave": {
           "source.fixAll.eslint": "explicit"
           },
           "editor.defaultFormatter": "esbenp.prettier-vscode",
           "editor.formatOnSave": true
       }

   ```

   4. Restart TypeScript Server
      1. `Cmd+P+Shift`
      2. `TypeScript: Restart Server`
      3. Run the command `Initializing JS/TS language features`
