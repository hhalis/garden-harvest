import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gardenalchemy.mergemysteries',
  appName: 'Garden Alchemy: Merge & Mysteries',
  webDir: 'client/dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#6C63FF",
      showSpinner: false
    },
    StatusBar: {
      style: 'dark'
    }
  }
};

export default config;
