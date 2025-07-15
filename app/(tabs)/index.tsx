import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Postcard from "@/components/PostCard";
import TopSongs from "@/components/TopSongs";
const CHARCOAL = "#232329";
const ACCENT = "#232329";
const posts = [
  {
    id: "1",
    user: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    song: {
      title: "As It Was",
      artist: "Harry Styles",
      cover: "https://i.scdn.co/image/ab67616d0000b273e1e6b08e0e7b9d178a7804ba",
      tags: ["pop", "summer"],
    },
    rating: 9.7,
    content: "Obsessed with this track lately! 🔥 The chorus is stuck in my head.",
    time: "3m ago",
    likes: 18,
    comments: 2,
    shares: 1,
  },
  {
    id: "2",
    user: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    song: {
      title: "Vampire",
      artist: "Olivia Rodrigo",
      cover: "https://i.scdn.co/image/ab67616d0000b2736c19f18e65ed46c4cf346825",
      tags: ["pop", "new"],
    },
    rating: 8.9,
    content: "Olivia never misses. This one's on repeat! 🩸",
    time: "12m ago",
    likes: 23,
    comments: 5,
    shares: 2,
  },
  {
    id: "3",
    user: {
      name: "David Lee",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    song: {
      title: "Paint The Town Red",
      artist: "Doja Cat",
      cover: "https://i.scdn.co/image/ab67616d0000b2736cb0c6911b6c6eb6930b6c8f",
      tags: ["hip-hop"],
    },
    rating: 9.3,
    content: "This beat goes so hard. 🚗💨",
    time: "23m ago",
    likes: 35,
    comments: 6,
    shares: 3,
  },
  {
    id: "4",
    user: {
      name: "Ava Williams",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    song: {
      title: "Daylight",
      artist: "David Kushner",
      cover: "https://i.scdn.co/image/ab67616d0000b273bd8ff98ff71f9c5d2c2f56a0",
      tags: ["indie", "moody"],
    },
    rating: 8.3,
    content: "This song makes me want to go for a walk and just think. 🌄",
    time: "40m ago",
    likes: 10,
    comments: 0,
    shares: 1,
  },
  {
    id: "5",
    user: {
      name: "Emily Zhang",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    song: {
      title: "Rush",
      artist: "Troye Sivan",
      cover: "https://i.scdn.co/image/ab67616d0000b273273a39832b6e59c0f3c4cc3d",
      tags: ["dance", "party"],
    },
    rating: 8.7,
    content: "If this doesn't get you moving, nothing will 💃.",
    time: "1h ago",
    likes: 42,
    comments: 9,
    shares: 5,
  },
  {
    id: "6",
    user: {
      name: "Alex Kim",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    song: {
      title: "Snooze",
      artist: "SZA",
      cover: "https://i.scdn.co/image/ab67616d0000b2735f2398f7b09c3b8e85f5d5ae",
      tags: ["r&b", "chill"],
    },
    rating: 9.1,
    content: "Perfect for a late night drive 🌙.",
    time: "1h ago",
    likes: 56,
    comments: 11,
    shares: 8,
  },
  {
    id: "7",
    user: {
      name: "Sophia Chen",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    song: {
      title: "Dance The Night",
      artist: "Dua Lipa",
      cover: "https://i.scdn.co/image/ab67616d0000b273ae2baaf0496d8b0d8d1c4b92",
      tags: ["pop", "fun"],
    },
    rating: 8.5,
    content: "Barbie soundtrack is actually so good 🎀.",
    time: "2h ago",
    likes: 19,
    comments: 3,
    shares: 2,
  },
  {
    id: "8",
    user: {
      name: "Michael Johnson",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    song: {
      title: "Chemical",
      artist: "Post Malone",
      cover: "https://i.scdn.co/image/ab67616d0000b273c2442b0f7e0ef7d9e904a3e4",
      tags: ["pop", "alt"],
    },
    rating: 8.0,
    content: "Always a vibe with Post.",
    time: "2h ago",
    likes: 8,
    comments: 0,
    shares: 1,
  },
  {
    id: "9",
    user: {
      name: "Grace Lee",
      avatar: "https://randomuser.me/api/portraits/women/92.jpg",
    },
    song: {
      title: "Cupid (Twin Version)",
      artist: "FIFTY FIFTY",
      cover: "https://i.scdn.co/image/ab67616d0000b273e6c117b14b5f03f9c49edbc1",
      tags: ["k-pop", "viral"],
    },
    rating: 9.0,
    content: "Can't get this out of my head 😍.",
    time: "3h ago",
    likes: 29,
    comments: 7,
    shares: 3,
  },
  {
    id: "10",
    user: {
      name: "Rohan Patel",
      avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    song: {
      title: "Calm Down",
      artist: "Rema & Selena Gomez",
      cover: "https://i.scdn.co/image/ab67616d0000b2731f23f64a36bbdbb6b1fa668c",
      tags: ["afrobeats", "collab"],
    },
    rating: 9.6,
    content: "Song of the summer! 🌞",
    time: "4h ago",
    likes: 33,
    comments: 8,
    shares: 6,
  },
];




export default function FeedScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 6,
        marginBottom: 10,
      }}>
          <Text style={{
            color: CHARCOAL,
            fontWeight: "bold",
            fontSize: 28,
            letterSpacing: 1.5,
          }}>
            mudi
          </Text>
      </View>

      {/* Searchbar */}
      <View style={{ marginBottom: 18 }}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f3f4f6",
          borderRadius: 16,
          paddingHorizontal: 16,
          paddingVertical: 12,
          shadowColor: "#000",
          shadowOpacity: 0.04,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 3,
        }}>
          <Ionicons name="search" size={20} color="#aaa" style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Search a song, artist, or genre"
            placeholderTextColor="#aaa"
            style={{
              flex: 1,
              fontSize: 13,
              color: CHARCOAL,
              minHeight: 24,
            }}
          />
          <Feather name="sliders" size={18} color={ACCENT} style={{ marginLeft: 8 }} />
        </View>
      </View>
    {/* Top Songs Section */}
    <TopSongs/>
    {/* Feed list */}
    <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Postcard post={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </SafeAreaView>
  );

}
