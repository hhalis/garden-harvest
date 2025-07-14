# Garden Alchemy: Play Store Deployment Guide

## Prerequisites

1. **Android Studio** - Download from https://developer.android.com/studio
2. **Google Play Console Account** - Create at https://play.google.com/console
3. **Java Development Kit (JDK) 17+**

## Step 1: Build the Mobile App

```bash
# Build the web version
npm run build

# Install Capacitor (if not already done)
npm install @capacitor/core @capacitor/cli @capacitor/android

# Build for mobile and sync
vite build --outDir dist/public
npx cap sync
npx cap add android
```

## Step 2: Configure Android App

### Update capacitor.config.ts:
```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gardenalchemy.mergemysteries',
  appName: 'Garden Alchemy: Merge & Mysteries',
  webDir: 'dist/public',
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
```

### Required Android Files:

1. **App Icon**: Create icon files in `android/app/src/main/res/`:
   - `mipmap-hdpi/ic_launcher.png` (72x72px)
   - `mipmap-mdpi/ic_launcher.png` (48x48px)
   - `mipmap-xhdpi/ic_launcher.png` (96x96px)
   - `mipmap-xxhdpi/ic_launcher.png` (144x144px)
   - `mipmap-xxxhdpi/ic_launcher.png` (192x192px)

2. **Splash Screen**: Create splash images in `android/app/src/main/res/`:
   - `drawable/splash.png` (Various sizes)

## Step 3: Open in Android Studio

```bash
# Open the Android project
npx cap open android
```

## Step 4: Configure App Signing

1. **Generate Keystore** (in Android Studio):
   ```bash
   keytool -genkey -v -keystore garden-alchemy-release-key.keystore -alias garden-alchemy -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Update build.gradle** (`android/app/build.gradle`):
   ```gradle
   android {
       signingConfigs {
           release {
               keyAlias 'garden-alchemy'
               keyPassword 'YOUR_KEY_PASSWORD'
               storeFile file('garden-alchemy-release-key.keystore')
               storePassword 'YOUR_STORE_PASSWORD'
           }
       }
       buildTypes {
           release {
               signingConfig signingConfigs.release
           }
       }
   }
   ```

## Step 5: Build Release APK/AAB

In Android Studio:
1. Go to **Build** → **Generate Signed Bundle/APK**
2. Choose **Android App Bundle (AAB)** for Play Store
3. Select your keystore and enter passwords
4. Choose **Release** build variant
5. Build the AAB file

## Step 6: Play Store Console Setup

### 1. Create App
1. Go to Google Play Console
2. Click "Create app"
3. Fill in app details:
   - **App name**: Garden Alchemy: Merge & Mysteries
   - **Default language**: English (US)
   - **App or game**: Game
   - **Free or paid**: Free

### 2. App Content
Fill out required sections:
- **Privacy Policy**: Create and host a privacy policy
- **Target audience**: Choose age groups
- **Content rating**: Complete IARC questionnaire
- **Data safety**: Declare data collection practices

### 3. Store Listing
- **App name**: Garden Alchemy: Merge & Mysteries
- **Short description**: "Restore magical gardens by merging colorful plants in this relaxing puzzle game!"
- **Full description**: 
```
🌱 Welcome to Garden Alchemy: Merge & Mysteries! 🌱

Restore ancient magical gardens by merging beautiful plant gems in this relaxing puzzle adventure. 

✨ FEATURES:
• Simple, intuitive gameplay perfect for all ages
• Beautiful 3D graphics with sparkling gem-like plants
• Relaxing garden restoration theme
• Touch-friendly mobile controls
• Satisfying merge mechanics
• Colorful, family-friendly design

🎯 HOW TO PLAY:
• Tap to add magical plant gems to your collection
• Select plants by tapping them
• Place plants in the golden center slot to restore the garden
• Complete levels to unlock new garden areas

Perfect for casual gaming sessions and stress relief!

Download now and start your magical garden restoration journey!
```

### 4. Graphics Assets
Create and upload:
- **App icon**: 512x512px PNG
- **Feature graphic**: 1024x500px
- **Screenshots**: 
  - Phone: At least 2 screenshots (16:9 or 9:16 ratio)
  - Tablet: At least 1 screenshot (optional but recommended)

## Step 7: Upload and Release

1. **Upload AAB**: Go to "Release" → "Production" → "Create new release"
2. Upload your signed AAB file
3. Add release notes
4. Review and rollout to production

## Step 8: Post-Launch

### App Store Optimization (ASO)
- **Keywords**: puzzle, merge, garden, plants, casual, relaxing, family
- **Category**: Puzzle or Casual Games
- **Tags**: puzzle, merge-game, garden, plants, casual, family-friendly

### Analytics Setup
Consider adding:
- Google Analytics for Firebase
- Crashlytics for crash reporting

## Troubleshooting

### Common Issues:
1. **Build Errors**: Ensure all dependencies are properly installed
2. **Signing Issues**: Double-check keystore passwords and file paths
3. **Upload Rejection**: Review Play Store policies and fix any violations

### Performance Optimization:
1. **WebView Performance**: Ensure 3D graphics work well on lower-end devices
2. **App Size**: Optimize assets to reduce APK/AAB size
3. **Loading Times**: Add proper loading screens

## Maintenance

### Regular Updates:
1. **Security Updates**: Keep dependencies updated
2. **New Features**: Add new levels or gameplay mechanics
3. **Bug Fixes**: Monitor crash reports and user feedback

### Monitoring:
1. **Play Console**: Check app performance and user ratings
2. **Reviews**: Respond to user feedback
3. **Analytics**: Track user engagement and retention

## Legal Requirements

### Required Policies:
1. **Privacy Policy**: Must be hosted and accessible
2. **Terms of Service**: Recommended for games
3. **Content Rating**: Complete IARC questionnaire
4. **Age Restrictions**: Properly classify target audience

### GDPR Compliance:
- Implement proper data consent mechanisms
- Provide data deletion options
- Maintain transparent data usage policies

---

**Ready for Upload!** Your Garden Alchemy game is now configured for Play Store deployment. Follow these steps carefully and you'll have your game live on the Play Store soon!