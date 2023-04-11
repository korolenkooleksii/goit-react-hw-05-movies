import { Wrapper, Bold, Text } from "./ErrorMessage.styled"

export const ErrorMessage = () => {
  return (
    <Wrapper>
      <Bold>404</Bold>
      <Text>Sorry, we couldn`t fins this page :(</Text>
    </Wrapper>
  );
}