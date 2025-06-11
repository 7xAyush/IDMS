# IDMS – Attendance & HR Portal (UI Recreation)

This is a React Native project built using **Expo**, intended to mimic the user interface of the original IDMS mobile application. The design and navigation were implemented manually due to the lack of an official Figma file.

## ✨ Features

- Professional home screen UI with fixed header and scrollable cards
- Interactive cards navigating to respective detail pages
- Custom-designed support screen (Help & Support) for raising/viewing tickets
- Confirmation modal for "Punch Out" action
- Custom "अB" icon created to match original app branding
- Manual drawer animation from left with multiple options

> Note: This is a front-end only mockup. No backend or data logic is currently implemented.

---

## 📸 Preview

| Home Screen | Drawer Menu | Help & Support |
|-------------|-------------|----------------|
| ![Home](assets/screenshots/home.png) | ![Drawer](assets/screenshots/drawer.png) | ![Support](assets/screenshots/support.png) |

---

## 🚀 Getting Started

Follow these steps to run the project locally using Expo:

### 📦 1. Clone the Repository

```bash
git clone https://github.com/7xAyush/IDMS.git
cd IDMS
npm install
npm start
This will start the Expo development server.

📱 4. Run on Your Device
Download the Expo Go app from the Play Store or App Store.

Open the scanner in Expo Go and scan the QR code displayed in the terminal or browser after running npm start.
⚠️ Notes
The layout is hardcoded for a specific device resolution to match the original APK. It may not render perfectly on all screen sizes.

A dedicated StyleSheet has not been used in Home.js for now due to the absence of a Figma design. Styles are inline for easier layout control.

Future improvements will focus on responsiveness and refactoring repeated styles into components.

🙌 Acknowledgements
Built using React Native and Expo

Icons provided by @expo/vector-icons

📬 Contact
For suggestions, contributions or collaboration, feel free to reach out:

Ayush Rai
📧 ayush.kumarrai712@gmail.com
🌐 GitHub – @7xAyush
