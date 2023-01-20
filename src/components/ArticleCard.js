import React from 'react';
import { Card, CardBody, Stack, Heading, Image, Text, Link } from '@chakra-ui/react';
import articleImage from '../images/chakra-image.png';

const ArticleCard = () => {
  const articleTitle = 'Create a Card Component using Chakra-UI';
  const articleText =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam cum aspernatur nostrum nulla deleniti voluptate quidem accusamus soluta recusandae dolor architecto, rerum fugit quaerat error dicta fugiat temporibus incidunt suscipit.';
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={articleImage} borderRadius="8px 8px 0 0" />

        <Stack mt="6" spacing="3">
          <Heading
            as="u"
            textUnderlineOffset={3}
            color="#292F2E"
            fontWeight={800}
            fontSize="lg"
            lineHeight="tall"
          >
            <Link href="https://emmanueloloke.dev">{articleTitle}</Link>
          </Heading>
          <Text noOfLines={3} fontSize="sm" lineHeight="taller" color="#949796">
            {articleText}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
