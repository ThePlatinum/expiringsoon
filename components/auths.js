import { Image, Pressable, StyleSheet, Text } from 'react-native';

export function AuthLogo({auth}) {
  return (
    <>
      <Image style={styles.image} source={require('../assets/logo-dark.png')} />
      <Text style={styles.title} > {auth} </Text>
    </>
  );
}

function footnote(which) {
  if (which == 'register') return 'Login'
  else return 'Register'
}

export function FootNote({auth}) {
  return (
    <Pressable>
      <Text style={styles.footnote}> Go to {footnote(auth)} </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 40,
  },
  title: {
    fontWeight: '600',
    marginBottom: 40,
    fontSize: 20,
  },
  footnote: {
    marginTop: 20,
    marginBottom: 40,
  }
});
