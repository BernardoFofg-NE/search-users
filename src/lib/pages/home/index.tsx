/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-shadow */
import { Button, Flex, Input, Stack, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import users from '../../../json/users.json';
import { Layout } from '~/lib/layout';

export const Home = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const toast = useToast();

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

  const postNewPass = async () => {
    if (email === '') {
      return;
    }
    try {
      await axios.post(
        'https://greenbets.waaffiliates.com/users/request-new-pass',
        {
          email,
        }
      );
      toast({
        title: 'Nova senha solicitada',
        status: 'success',
      });
    } catch (e) {
      toast({
        title: 'Usuário não encontrado',
        status: 'error',
      });
    }
  };

  useEffect(() => {
    postNewPass();
  }, [email]);
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
