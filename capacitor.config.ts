import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'natinf',
  webDir: 'dist/natinf/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
