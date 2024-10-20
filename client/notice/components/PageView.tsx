import { Href, router } from 'expo-router';
import { BackButton } from './CustomButtons';
import { containerStyles } from './styles';
import { VStack } from './ui/vstack';

interface PageViewProps {
  children: React.ReactNode;
  page?: Href<string | object>;
}

export default function PageView({ children, page }: PageViewProps) {
  const directedPage = page ?? './home';
  return (
    <VStack style={containerStyles.mainContainerForPages}>
      <BackButton onPress={() => router.push(directedPage)} />
      <VStack style={containerStyles.mainCentralContainer}>{children}</VStack>
    </VStack>
  );
}
