import React from 'react';
import { View, Text, Image } from 'react-native';

const CHARCOAL = "#232329";
const ACCENT = "#232329";

export default function SongCard({ title, artist, cover, tags }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
        padding: 7,
        marginBottom: 4,
      }}
    >
      <Image source={{ uri: cover }} style={{ width: 38, height: 38, borderRadius: 7, marginRight: 10 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "600", color: CHARCOAL, fontSize: 13 }} numberOfLines={1}>{title}</Text>
        <Text style={{ color: "#888", fontSize: 12 }}>{artist}</Text>
        <View style={{ flexDirection: "row", marginTop: 3 }}>
          {tags && tags.map((tag, idx) => (
            <Text
              key={idx}
              style={{
                fontSize: 10,
                color: ACCENT,
                borderWidth: 1,
                borderColor: ACCENT,
                borderRadius: 999,
                paddingHorizontal: 7,
                paddingVertical: 1,
                marginRight: 6,
                overflow: "hidden"
              }}
            >
              {tag}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}
