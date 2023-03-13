# README
## Setup
To run the project you need to follow the React Native docs about environment setup https://reactnative.dev/docs/environment-setup. You need to follow the **React Native CLI Quickstart**, not Expo Go quickstart.

The project was started as Expo Go project, however I added `reacreact-native-quick-crypto` which is a native dependency. As a result I had to make a [development build](https://docs.expo.dev/development/introduction/) with Expo.

Regarding Xcode version, NodeJS version please check their versions in `.xcode-version` & `.nvmrc` files.

## Installation
When you did environment setup correctly you should only run:

for Android
```
yarn android
```
for iOS
```
yarn ios
```

## Demo
Environment setup in React Native is not simple, so to save you some time here is a little demo:
![](./demo.gif)

## Improvements
Since this is an interview project with limited time I haven't done everything I would like. Here's a list of areas I would improve on:
1. Adds unit & integration tests. Right now project has no tests which is a **very bad thing**
2. Recovering wallet from seeds phrases with ethers.js is a slow process. I think for a demo it's ok, but for production, app would need to be **more responsive**. I would either use **different implementation of BIP39** or would **spawn another Javascript process** so the main JS process is not blocked with heavy computation. 
3. Right now app only uses **Sepolia** test network. Probably some network switch would be beneficial to have.
