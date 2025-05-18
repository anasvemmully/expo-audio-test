import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';

import { Button } from '~/components/Button';
import { StyleSheet, View } from 'react-native';

const source = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const player = useVideoPlayer({ uri: source });

    const handlePlay = () => {
        setIsPlaying((prev) => {
            if (prev) {
                player.pause();
            } else {
                player.play();
            }

            return !prev;
        });
    };

    return (
        <>
            <Stack.Screen options={{ title: 'Video Screen' }} />
            <View style={styles.container}>
                <VideoView
                    player={player}
                    nativeControls
                    contentFit="contain"
                    style={{ width: '100%', aspectRatio: 16 / 9, borderRadius: 8, borderColor: 'black', borderWidth: 1 }}
                />
                <Button onPress={handlePlay} title={isPlaying ? "Pause Video" : "Play Video"} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});