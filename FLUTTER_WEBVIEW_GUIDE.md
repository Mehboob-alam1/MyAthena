# Flutter WebView Wrapper Guide - MyAthena.life

## Overview

This guide provides step-by-step instructions for building a Flutter mobile app that wraps the MyAthena.life web application in a WebView. This approach allows rapid deployment to iOS App Store and Google Play Store while maintaining a native app experience.

---

## Prerequisites

- Flutter SDK (3.0+)
- Xcode (for iOS development)
- Android Studio (for Android development)
- GitHub account with access to MyAthena repository
- Apple Developer Account (for App Store)
- Google Play Developer Account (for Play Store)

---

## Project Setup

### 1. Create Flutter Project

```bash
flutter create myathena_life_app
cd myathena_life_app
```

### 2. Update pubspec.yaml

Add required dependencies:

```yaml
dependencies:
  flutter:
    sdk: flutter
  webview_flutter: ^4.4.0
  url_launcher: ^6.1.0
  package_info_plus: ^4.0.0
  connectivity_plus: ^5.0.0
  flutter_local_notifications: ^14.0.0
  shared_preferences: ^2.2.0
  permission_handler: ^11.4.0

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_linter: ^3.0.0
```

Run:
```bash
flutter pub get
```

---

## WebView Implementation

### 1. Main App Structure

**lib/main.dart:**

```dart
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'screens/webview_screen.dart';
import 'screens/offline_screen.dart';

void main() {
  runApp(const MyAthenaApp());
}

class MyAthenaApp extends StatelessWidget {
  const MyAthenaApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MyAthena.life',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        useMaterial3: true,
      ),
      home: const MyAthenaHome(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyAthenaHome extends StatefulWidget {
  const MyAthenaHome({Key? key}) : super(key: key);

  @override
  State<MyAthenaHome> createState() => _MyAthenaHomeState();
}

class _MyAthenaHomeState extends State<MyAthenaHome> {
  late Stream<ConnectivityResult> _connectivityStream;

  @override
  void initState() {
    super.initState();
    _connectivityStream = Connectivity().onConnectivityChanged;
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<ConnectivityResult>(
      stream: _connectivityStream,
      builder: (context, snapshot) {
        if (snapshot.data == ConnectivityResult.none) {
          return const OfflineScreen();
        }
        return const WebViewScreen();
      },
    );
  }
}
```

### 2. WebView Screen

**lib/screens/webview_screen.dart:**

```dart
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:package_info_plus/package_info_plus.dart';

class WebViewScreen extends StatefulWidget {
  const WebViewScreen({Key? key}) : super(key: key);

  @override
  State<WebViewScreen> createState() => _WebViewScreenState();
}

class _WebViewScreenState extends State<WebViewScreen> {
  late WebViewController _webViewController;
  bool _isLoading = true;
  String _errorMessage = '';

  @override
  void initState() {
    super.initState();
    _initializeWebView();
  }

  void _initializeWebView() {
    _webViewController = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(
        NavigationDelegate(
          onPageStarted: (String url) {
            setState(() => _isLoading = true);
          },
          onPageFinished: (String url) {
            setState(() {
              _isLoading = false;
              _errorMessage = '';
            });
          },
          onWebResourceError: (WebResourceError error) {
            setState(() {
              _isLoading = false;
              _errorMessage = error.description;
            });
          },
          onNavigationRequest: (NavigationRequest request) {
            // Handle external links
            if (!request.url.startsWith('https://my-athena-latest.vercel.app')) {
              _launchExternalUrl(request.url);
              return NavigationDecision.prevent;
            }
            return NavigationDecision.navigate;
          },
        ),
      )
      ..loadRequest(
        Uri.parse('https://my-athena-latest.vercel.app'),
      );

    _injectUserAgent();
  }

  Future<void> _injectUserAgent() async {
    final packageInfo = await PackageInfo.fromPlatform();
    final userAgent =
        'MyAthenaApp/${packageInfo.version} (${Theme.of(context).platform})';
    
    await _webViewController.runJavaScript('''
      Object.defineProperty(navigator, 'userAgent', {
        get: function() { return '$userAgent'; }
      });
    ''');
  }

  Future<void> _launchExternalUrl(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('MyAthena.life'),
        backgroundColor: const Color(0xFF0a0e27),
        elevation: 0,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: () => _webViewController.reload(),
          ),
        ],
      ),
      body: Stack(
        children: [
          WebViewWidget(controller: _webViewController),
          if (_isLoading)
            const Center(
              child: CircularProgressIndicator(),
            ),
          if (_errorMessage.isNotEmpty)
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.error_outline, size: 64, color: Colors.red),
                  const SizedBox(height: 16),
                  Text(
                    'Error loading page',
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  const SizedBox(height: 8),
                  Text(_errorMessage),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () => _webViewController.reload(),
                    child: const Text('Retry'),
                  ),
                ],
              ),
            ),
        ],
      ),
    );
  }
}
```

### 3. Offline Screen

**lib/screens/offline_screen.dart:**

```dart
import 'package:flutter/material.dart';

class OfflineScreen extends StatelessWidget {
  const OfflineScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('MyAthena.life'),
        backgroundColor: const Color(0xFF0a0e27),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(
              Icons.wifi_off,
              size: 64,
              color: Colors.grey,
            ),
            const SizedBox(height: 16),
            Text(
              'No Internet Connection',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 8),
            const Text('Please check your connection and try again.'),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () {
                // Trigger connectivity check
                Navigator.of(context).pushReplacementNamed('/');
              },
              child: const Text('Retry'),
            ),
          ],
        ),
      ),
    );
  }
}
```

---

## iOS Configuration

### 1. Update Info.plist

**ios/Runner/Info.plist:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleDevelopmentRegion</key>
    <string>en</string>
    <key>CFBundleExecutable</key>
    <string>$(EXECUTABLE_NAME)</string>
    <key>CFBundleIdentifier</key>
    <string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
    <key>CFBundleInfoDictionaryVersion</key>
    <string>6.0</string>
    <key>CFBundleName</key>
    <string>MyAthena.life</string>
    <key>CFBundlePackageType</key>
    <string>APPL</string>
    <key>CFBundleShortVersionString</key>
    <string>1.0</string>
    <key>CFBundleSignature</key>
    <string>????</string>
    <key>CFBundleVersion</key>
    <string>1</string>
    <key>LSRequiresIPhoneOS</key>
    <true/>
    <key>UILaunchStoryboardName</key>
    <string>LaunchScreen</string>
    <key>UIMainStoryboardFile</key>
    <string>Main</string>
    <key>UISupportedInterfaceOrientations</key>
    <array>
        <string>UIInterfaceOrientationPortrait</string>
        <string>UIInterfaceOrientationPortraitUpsideDown</string>
    </array>
    <key>UISupportedInterfaceOrientationsIPad</key>
    <array>
        <string>UIInterfaceOrientationPortrait</string>
        <string>UIInterfaceOrientationPortraitUpsideDown</string>
        <string>UIInterfaceOrientationLandscapeLeft</string>
        <string>UIInterfaceOrientationLandscapeRight</string>
    </array>
    <key>UIViewControllerBasedStatusBarAppearance</key>
    <false/>
    <key>NSAppTransportSecurity</key>
    <dict>
        <key>NSAllowsArbitraryLoads</key>
        <true/>
        <key>NSExceptionDomains</key>
        <dict>
            <key>my-athena-latest.vercel.app</key>
            <dict>
                <key>NSIncludesSubdomains</key>
                <true/>
                <key>NSThirdPartyExceptionAllowsInsecureHTTPLoads</key>
                <false/>
                <key>NSThirdPartyExceptionRequiresForwardSecrecy</key>
                <true/>
            </dict>
        </dict>
    </dict>
</dict>
</plist>
```

### 2. Build for iOS

```bash
flutter build ios --release
```

This creates an Xcode project ready for App Store submission.

---

## Android Configuration

### 1. Update AndroidManifest.xml

**android/app/src/main/AndroidManifest.xml:**

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.myathena.life">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:label="MyAthena.life"
        android:icon="@mipmap/ic_launcher"
        android:usesCleartextTraffic="false">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:launchMode="singleTop"
            android:theme="@style/LaunchTheme"
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"
            android:hardwareAccelerated="true"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <meta-data
            android:name="flutterEmbedding"
            android:value="2" />
    </application>
</manifest>
```

### 2. Build for Android

```bash
flutter build apk --release
# or for App Bundle (recommended for Play Store)
flutter build appbundle --release
```

---

## App Store Submission

### iOS (App Store)

1. **Create App ID:**
   - Go to Apple Developer Console
   - Create new App ID: `com.myathena.life`
   - Enable necessary capabilities (Push Notifications, etc.)

2. **Create App Store Listing:**
   - App Name: MyAthena.life
   - Subtitle: Your Personal AI Life Coach
   - Description: Transform your life with ancient wisdom and modern neuroscience
   - Keywords: life coaching, AI, meditation, personal development
   - Category: Health & Fitness or Productivity

3. **Build and Archive:**
   ```bash
   flutter build ios --release
   cd ios
   xcodebuild -workspace Runner.xcworkspace -scheme Runner -configuration Release -archivePath build/Runner.xcarchive archive
   xcodebuild -exportArchive -archivePath build/Runner.xcarchive -exportOptionsPlist ExportOptions.plist -exportPath build/ipa
   ```

4. **Upload to App Store Connect:**
   - Use Xcode or Transporter
   - Submit for review

### Android (Google Play Store)

1. **Create App Signing Key:**
   ```bash
   keytool -genkey -v -keystore ~/myathena-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias myathena-key
   ```

2. **Configure Signing:**
   - Create `android/key.properties`:
   ```properties
   storePassword=<password>
   keyPassword=<password>
   keyAlias=myathena-key
   storeFile=<path-to-keystore>
   ```

3. **Build Release Bundle:**
   ```bash
   flutter build appbundle --release
   ```

4. **Upload to Google Play Console:**
   - Create new app
   - Upload App Bundle
   - Fill in store listing details
   - Submit for review

---

## Testing Checklist

- [ ] App launches without errors
- [ ] WebView loads https://my-athena-latest.vercel.app
- [ ] All Four Pillars are accessible (Oracle, Crucible, Mirror, Ascent)
- [ ] No horizontal scrolling on mobile screens
- [ ] Touch interactions work smoothly
- [ ] Back button navigation works
- [ ] Offline screen displays when no internet
- [ ] App handles network reconnection gracefully
- [ ] Performance is smooth (no lag or stuttering)
- [ ] All links open correctly
- [ ] Authentication flow works (login/logout)

---

## Performance Optimization

### 1. Enable Hardware Acceleration
Already configured in AndroidManifest.xml

### 2. Optimize WebView Settings
```dart
_webViewController.setOnConsoleMessage((JavaScriptConsoleMessage message) {
  // Log console messages for debugging
  print('WebView Console: ${message.message}');
});
```

### 3. Cache Strategy
```dart
// Implement offline caching for critical assets
_webViewController.setOnDownloadStart((String url) {
  // Handle file downloads
});
```

---

## Troubleshooting

### Issue: WebView shows blank screen
- **Solution:** Check internet connection, verify HTTPS certificate
- **Debug:** Enable JavaScript console logging

### Issue: Horizontal scrolling on mobile
- **Solution:** Verify viewport meta tag in web app (already fixed)
- **Debug:** Use Chrome DevTools remote debugging

### Issue: App crashes on launch
- **Solution:** Check Flutter logs: `flutter logs`
- **Debug:** Verify all dependencies are properly installed

### Issue: Authentication not persisting
- **Solution:** Enable cookies in WebViewController
```dart
_webViewController.setOnWebResourceError((error) {
  // Handle errors
});
```

---

## Deployment Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| Development | 1-2 weeks | WebView integration, testing, optimization |
| Testing | 1 week | QA testing on multiple devices |
| App Store Prep | 1 week | Screenshots, descriptions, compliance |
| Submission | 1-2 days | Submit to both stores |
| Review | 1-3 weeks | App Store review, Play Store review |
| Launch | 1 day | Monitor for issues, respond to feedback |

---

## Post-Launch Support

1. **Monitor App Performance:**
   - Track crash rates and user feedback
   - Monitor WebView performance metrics

2. **Regular Updates:**
   - Update Flutter SDK quarterly
   - Update dependencies monthly
   - Push web app updates independently

3. **User Support:**
   - Respond to app store reviews
   - Track and fix reported issues
   - Gather user feedback for improvements

---

## Resources

- [Flutter WebView Documentation](https://pub.dev/packages/webview_flutter)
- [Apple App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Store Policies](https://play.google.com/about/developer-content-policy/)
- [Flutter Deployment Guide](https://flutter.dev/docs/deployment)

---

## Next Steps

1. Clone this Flutter project template
2. Configure iOS and Android signing
3. Test on physical devices
4. Submit to both app stores
5. Monitor and iterate based on user feedback

**Estimated Time to Launch: 4-6 weeks**
