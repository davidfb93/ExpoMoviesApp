# Welcome to your Expo Moviesapp 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Fix package.json file in the dependency 'react-native-reanimated-carousel'

   ```bash
    'react-native-reanimated-carousel': 4.0.0-canary.17
   ```

3. Correct node modules in `node_modules/react-native-reanimated-carousel/src/layouts/parallax.ts, correct line 55 const zIndex with a Math.round()

   ```bash
    const zIndex = Math.round(

      interpolate(

        value,

        [-1, 0, 1],

        [0, size, 0],

        Extrapolation.CLAMP,

      )

    );
   ```

4. Copy .env.template file, and place the api_key of the moviesDB

   ```bash
    https://www.themoviedb.org/settings/api
   ```

4. Start the app

   ```bash
    npx expo start
   ```

