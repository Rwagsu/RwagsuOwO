import { Flex, Avatar, Text, Card, Box } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function AvatarButton({ name, description, iconLink, link }: { name: string, description: string, iconLink: string, link: string }) {
    const iconFallBack: string = name.charAt(0);

    return (
        <Box maxWidth="240px">
            <Card asChild variant="ghost">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Flex align="center" justify="center" gap="2" width="fit-content">
                        <Avatar
                            radius="full"
                            src={iconLink}
                            fallback={iconFallBack}
                        />
                        <Flex direction="column">
                            <Text className="leading-none"><strong>{name}</strong></Text>
                            <Text className="leading-none" size="1">{description}</Text>
                        </Flex>
                    </Flex>
                </a>
            </Card>
        </Box>
    );
}