/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';

import users from '../../../json/users.json';
import Logo from '~/lib/assets/logo.png';
import Wrapper from '~/lib/assets/wrapper-forget.svg';
import { Layout } from '~/lib/layout';

export const Home = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const toast = useToast();
  const isResponsive = useBreakpointValue({
    base: true,
    md: false,
  });

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
      <Flex
        justify="center"
        align="center"
        w="100%"
        h="100vh"
        gap={8}
        paddingX={16}
      >
        <Stack
          as="form"
          onSubmit={handleSubmit}
          alignItems="center"
          spacing={4}
          marginBottom={32}
          width="100%"
          maxW={550}
        >
          <Image src={Wrapper.src} width={324} />
          <InputGroup>
            <InputLeftAddon backgroundColor="transparent">
              <FaUser color="white" />
            </InputLeftAddon>
            <Input
              onChange={handleInputChange}
              value={username}
              type="text"
              placeholder="Insira o username"
              textColor="whiteAlpha.800"
            />
          </InputGroup>
          <Button
            type="submit"
            backgroundColor="label.primary"
            _hover={{ opacity: 0.7 }}
            textColor="white"
            width="100%"
          >
            Receber senha
          </Button>
        </Stack>
      </Flex>
    </Layout>
  );
};
