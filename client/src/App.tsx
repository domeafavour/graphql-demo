import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Greeting from './components/Greeting';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Greeting />
    </QueryClientProvider>
  );
}

export default App;
