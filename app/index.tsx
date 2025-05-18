import { StyleSheet, View } from 'react-native';
import { Stack, Link } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <View style={styles.container}>
          <Link href={{ pathname: "/audio", params: { name: 'Dan' } }} asChild>
            <Button title="Navigate to /audio screen" />
          </Link>
          <Link href={{ pathname: "/video", params: { name: 'Dan' } }} asChild>
            <Button title="Navigate to /video screen" />
          </Link>
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