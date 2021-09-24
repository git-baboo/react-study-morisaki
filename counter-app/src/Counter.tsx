import { VStack, Text } from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { useControllableState } from "@chakra-ui/hooks";

function Counter() {
  const [count, setCount] = useControllableState({ defaultValue: 0 });

  const decrementCount = () => {
    setCount(Math.max(0, count - 1));
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <VStack m={5} p={5} borderRadius="md">
      <Text fontSize="2xl">{count}</Text>
      <ButtonGroup variant="outline">
        <Button colorScheme="red" onClick={decrementCount}>
          -1
        </Button>
        <Button colorScheme="blue" onClick={incrementCount}>
          +1
        </Button>
      </ButtonGroup>
    </VStack>
  );
}

export default Counter;
