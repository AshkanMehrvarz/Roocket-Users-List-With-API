import { Container, Image, Text, Row } from "@nextui-org/react";
import React from "react";

export default function Hero() {
  return (
    <Container>
      <Row
        style={{
          flexDirection: "row-reverse",
          paddingLeft: 100,
          paddingTop: 100,
        }}
        justify='space-around'
        align='center'>
        <Image src='https://i.ibb.co/MsMxqDw/Saly-11.png' />
        <Text h1 size={80}>
          My name is
          <Text
            h1
            size={80}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}>
            Ashkan
          </Text>
          <Text h1 size={80}>
            and
          </Text>
          <Text
            h1
            size={80}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}>
            i Think
          </Text>
          <Text h1 size={80}>
            im developer
          </Text>
        </Text>
      </Row>
    </Container>
  );
}
