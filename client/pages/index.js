import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  if (!currentUser) {
    // Data is not available yet, return a loading indicator or handle it as needed.
    return <div>Loading...</div>;
  }

  // Render the component when data is available
  return (
    <div>
      <h1>Landing Page</h1>
      {/* Render currentUser data here */}
    </div>
  );
};


LandingPage.getInitialProps = async () => {
  if (typeof window === 'undefined') {
    // Make server-side request and await the result
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: {
          Host: 'bigapp.com',
        },
      }
    );

    // Return the data as a property
    return data;
  } else {
    // Make client-side request and await the result
    const { data } = await axios.get('/api/users/currentuser');
    console.log('components');
    // Return the data as a property
    return data;
  }
};


export default LandingPage;
