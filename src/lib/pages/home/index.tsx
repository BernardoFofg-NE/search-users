/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-shadow */
import { Button, Flex, Input, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

import users from '../../../json/users.json';
import { Layout } from '~/lib/layout';

export const Home = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const findEmailByUsername = (username: string) => {
    const user = users.find(
      (user: { username: string }) => user.username === username
    );
    return user ? user.email : undefined;
  };

  const handleInputChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const userEmail = findEmailByUsername(username);

    if (userEmail) {
      setEmail(userEmail);
    } else {
      alert('Nenhum usuário encontrado');
    }
  };
  return (
    <Layout>
      <Flex justify="center" align="center" w="100%" h="100vh">
        <Stack as="form" onSubmit={handleSubmit}>
          <Input
            onChange={handleInputChange}
            value={username}
            type="text"
            placeholder="Insira o username"
          />
          <Button type="submit">Encontrar email</Button>
          <Text>Email: {email}</Text>
        </Stack>
      </Flex>
    </Layout>
  );
};
