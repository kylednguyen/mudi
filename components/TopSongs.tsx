import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function TopSongsPlaceholder() {
  const CARD_WIDTH = 110;
  const CARD_HEIGHT = 80;

  return (
    <View style={{ marginBottom: 18 }}>
      <Text
        style={{
          color: "#232329",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 8,
        }}
      >
        Top Songs
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {["Espresso", "Super Shy", "Paint The Town Red", "Dance The Night", "Rush"].map((song, idx) => (
          <TouchableOpacity
            key={song}
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              backgroundColor: "#f3f4f6",
              borderRadius: 14,
              marginRight: 14,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#e0e0e5",
              borderWidth: 1,
            }}
            activeOpacity={0.7}
          >
            <Text
              style={{
                color: "#232329",
                fontWeight: "600",
                fontSize: 15,
                marginBottom: 4,
                textAlign: "center",
              }}
              numberOfLines={1}
            >
              {song}
            </Text>
            <Text
              style={{
                color: "#888",
                fontSize: 12,
                textAlign: "center",
              }}
              numberOfLines={1}
            >
              Artist Name
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
