import ScreenBackground from '../components/ScreenBackground';
import {Button, TextInput, Text} from 'react-native-paper';
import oauthLogin from '../auth/oauthLogin';
import useLoginForm from '../auth/useLoginForm';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';
const path = '/api/oauth/token';
const httpClient = axios.create({baseURL: baseUrl});

export default function SignInScreen() {
  const onLogin = ({username, password}) =>
    oauthLogin({
      httpClient,
      path,
      username,
      password,
    }).then(token => console.log({token}));
  const {username, password, error, handleChange, handleLogin} =
    useLoginForm(onLogin);

  return (
    <ScreenBackground>
      <TextInput
        label="Email"
        accessibilityLabel="Email"
        value={username}
        onChangeText={handleChange('username')}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        label="Password"
        accessibilityLabel="Password"
        value={password}
        onChangeText={handleChange('password')}
        secureTextEntry
      />
      <Text>{error}</Text>
      <Button
        mode="contained"
        onPress={handleLogin}
        accessibilityLabel="Sign in"
      >
        Sign in
      </Button>
    </ScreenBackground>
  );
}
