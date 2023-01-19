import React from 'react';
import { Box, VStack, Image, Text, Link } from '@chakra-ui/react';
import articleImage from '../images/chakra-image.png';

const Card = () => {
  const articleTitle = 'Creating a Card Component using Chakra-UI';
  const articleText =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quis a consequatur veniam debitis, iusto, perferendis...';
  return (
    <Box borderColor="#E3E3E3" borderWidth="1px" borderRadius="2xl" w="23.7rem" height="26rem">
      <VStack m={5} gap={4}>
        <Image src={articleImage} borderRadius="16px 16px 0 0" />
        <Text
          as="u"
          textUnderlineOffset={3}
          color="#292F2E"
          fontWeight={800}
          fontSize="lg"
          lineHeight="tall"
        >
          <Link href="https://emmanueloloke.dev">{articleTitle}</Link>
        </Text>
        <Text fontSize="sm" lineHeight="taller" color="#949796">
          {articleText}
        </Text>
      </VStack>
    </Box>
  );
};

export default Card;
