import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1 className=" text-6xl">Your signed In</h1> : <h1 className=" text-6xl">Your signed Out</h1>
};

LandingPage.getInitialProps = async context => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return data;
};

export default LandingPage;
