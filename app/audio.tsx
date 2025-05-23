import { Stack, useFocusEffect } from 'expo-router';
import { setAudioModeAsync, useAudioPlayer } from "expo-audio"
import { Container } from '~/components/Container';
import { Button } from '~/components/Button';
import { StyleSheet, View } from 'react-native';
import React from 'react';

export default function Details() {
  const sound1 = useAudioPlayer({ uri: "sound1" })
  const sound2 = useAudioPlayer({ uri: "sound2" })
  const sound3 = useAudioPlayer({ uri: "sound3" })
  const sound4 = useAudioPlayer({ uri: "sound4" })

  useFocusEffect(
    React.useCallback(() => {
      setAudioModeAsync({
        interruptionModeAndroid: "duckOthers",
        interruptionMode: "mixWithOthers",
      })
    }, [])
  )

  const playSound1 = async () => {
    console.log('sound1 >> ', sound1)
    await sound1.seekTo(0);
    sound1.play();
  }

  const playSound2 = async () => {
    console.log('sound2 >> ', sound2)
    await sound2.seekTo(0);
    sound2.play();
  }

  const playSound3 = async () => {
    console.log('sound3 >> ', sound3)
    await sound3.seekTo(0);
    sound3.play();
  }

  const playSound4 = async () => {
    console.log('sound4 >> ', sound4)
    await sound4.seekTo(0);
    sound4.play();
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Audio Screen' }} />
      <Container>
        <View style={styles.container}>
          <Button
            title="Play sound 1"
            onPress={playSound1}
          />
          <Button
            title="Play sound 2"
            onPress={playSound2}
          />
          <Button
            title="Play sound 3"
            onPress={playSound3}
          />
          <Button
            title="Play sound 4"
            onPress={playSound4}
          />
        </View>
      </Container>
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