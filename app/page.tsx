import styles from "./page.module.css";
import { Autocomplete, Button, Center, Flex } from "@mantine/core";

export default function Home() {
  return (
    <Center h={"100vh"}>
      <Flex direction={"column"} justify={"center"} gap={4}>
        <Autocomplete
          label="Your favorite library"
          placeholder="Pick value or enter anything"
          data={["React", "Angular", "Vue", "Svelte"]}
          size="md"
        />
        <Button variant="filled" size="md">
          Button
        </Button>
      </Flex>
    </Center>
  );
}
