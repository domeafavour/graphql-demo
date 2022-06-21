import { request } from 'graphql-request';
import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-query';

const greetingQuery = gql`
  query Greeting {
    greeting
  }
`;

const useQueryGreeting = () => {
  return useQuery<string>('greeting', async () => {
    const { greeting } = await request('http://localhost:9000', greetingQuery);
    return greeting;
  });
};

interface Props {}

export type { Props as GreetingProps };

const Greeting: React.FC<Props> = () => {
  const { data } = useQueryGreeting();
  return <h1>{data}</h1>;
};

export default Greeting;
