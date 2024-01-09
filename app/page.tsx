import LoginButton from "@/components/auth/login-button";
import styles from "./page.module.css";
import { Text, Center, Flex, Button } from "@mantine/core";

const HomePage = () => {
  return (
    <Center h={"100vh"} className={styles["gradient-bg"]}>
      <Flex direction={"column"} justify={"center"} gap={4} align={"center"}>
        <Text c="white" size="4rem" fw={700}>
          🔏 Sup Auth
        </Text>
        <Text c={"white"} size="lg">
          The Best Authentication Service For Real
        </Text>
        <LoginButton>
          <Button fullWidth variant="gradient">
            Click me boi
          </Button>
        </LoginButton>
      </Flex>
    </Center>
  );
};

export default HomePage;
