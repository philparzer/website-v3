import { AppTokenAuthProvider } from '@twurple/auth';

const clientId = process.env.TWITCH_CLIENT_ID;
const clientSecret = process.env.TWITCH_CLIENT_SECRET;

if (!clientId || !clientSecret) {
    throw new Error('Twitch client ID and secret are required');
}

const authProvider = new AppTokenAuthProvider(clientId, clientSecret);

export default authProvider;