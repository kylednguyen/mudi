# mudi 🎧

A social music-sharing app built with React Native and Expo. Discover new tracks, share your favorite songs, and see what your friends are listening to!

---

## ✨ Features

- 🎵 **Spotify Integration:** Search for any song, artist, or album using the Spotify API.
- 📱 **Social Feed:** A dynamic feed to view song posts from friends, complete with likes and comments.
- 🥇 **"Top Songs" Carousel:** See your most-played tracks at a glance.
- 🎶 **User Playlists:** Curate and manage your personal playlists (Work in Progress).
- 🎨 **Clean & Modern UI:** A beautiful and intuitive user interface.

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/go) app on your iOS or Android device for testing.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/mudi.git](https://github.com/your-username/mudi.git)
    cd mudi
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    You'll need to add your Spotify API credentials. Create a file named `.env` in the root of the project and add the following variables:
    ```
    EXPO_PUBLIC_SPOTIFY_CLIENT_ID='YOUR_SPOTIFY_CLIENT_ID'
    EXPO_PUBLIC_SPOTIFY_CLIENT_SECRET='YOUR_SPOTIFY_CLIENT_SECRET'
    ```
    *You can get these from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).*

---

## ▶️ Usage

Once the installation is complete, you can start the development server:

```bash
npx expo start