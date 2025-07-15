import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import SongCard from './SongCard';

const CHARCOAL = "#232329";
const GRAY = "#888";
const ACCENT = "#232329";

const Postcard = ({ post }) => {
  if (!post) return null;

  const {
    user: { avatar, name },
    song: { title, artist, cover, tags },
    rating, // e.g. 8.5 or 9.2 (for badge)
    content,
    time,
    likes = 0,
    comments = 0,
    shares = 0,
  } = post;

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 18,
        marginBottom: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: "#eaeaea",
        shadowColor: "#000",
        shadowOpacity: 0.03,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      }}
    >
      {/* User Row */}
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
        activeOpacity={0.7}
        onPress={() => console.log("User pressed:", name)}
      >
        <Image source={{ uri: avatar }} style={{ width: 32, height: 32, borderRadius: 16, marginRight: 8 }} />
        <Text style={{ fontWeight: "700", color: CHARCOAL, fontSize: 15, flexShrink: 1 }}>{name}</Text>
        {rating && (
          <View style={{
            backgroundColor: "#eee",
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 2,
            marginLeft: 8,
            minWidth: 36,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={{ color: ACCENT, fontWeight: "bold", fontSize: 13 }}>{rating}/10</Text>
          </View>
        )}
        <Ionicons name="ellipsis-horizontal" size={18} color="#bbb" style={{ marginLeft: "auto" }} />
      </TouchableOpacity>

      {/* Content */}
      <TouchableOpacity activeOpacity={0.7} onPress={() => console.log("Post pressed!")}>
        <Text style={{ marginBottom: 8, color: CHARCOAL, fontSize: 14 }}>{content}</Text>
      </TouchableOpacity>

      {/* Song mini-card */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => console.log("Song pressed:", title)}
      >
        <SongCard
          title={title}
          artist={artist}
          cover={cover}
          tags={tags}
        />
      </TouchableOpacity>
      {/* Time below song card */}
      <Text style={{ color: "#aaa", fontSize: 12, marginLeft: 3, marginBottom: 6 }}>{time}</Text>

      {/* Action icons row */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 3,
          justifyContent: "flex-start",
          gap: 17
        }}>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => console.log("Like")}>
          <Ionicons name="heart" size={16} color={ACCENT} />
          <Text style={{ marginLeft: 4, fontSize: 13, color: CHARCOAL }}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => console.log("Comment")}>
          <Ionicons name="chatbubble-outline" size={16} color={GRAY} />
          <Text style={{ marginLeft: 4, fontSize: 13, color: CHARCOAL }}>{comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => console.log("Share")}>
          <Feather name="repeat" size={15} color={GRAY} />
          <Text style={{ marginLeft: 4, fontSize: 13, color: CHARCOAL }}>{shares}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Bookmark")}>
          <Ionicons name="bookmark-outline" size={16} color={GRAY} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Postcard;
