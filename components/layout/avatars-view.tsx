import { avatars } from "@/lib/layout.shared";
import AvatarButton from "../ui/avatar-button";
import { Flex } from "@radix-ui/themes";

export default function AvatarsView({ avatarIds, className }: { avatarIds: string[]; className?: string }) {
    const avatarComponents = [];
    for (const id of avatarIds) {
        const avatarData = avatars.find(avatar => avatar.id === id);
        if (avatarData) {
            avatarComponents.push(
                <AvatarButton
                    key={avatarData.id}
                    name={avatarData.name}
                    description={avatarData.description}
                    iconLink={avatarData.iconLink}
                    link={avatarData.link}
                />
            );
        }
    }

    if (avatarComponents.length === 0) {
        return null;
    }

    return (
        <Flex gap="3" className={className}>
            {avatarComponents.map((component, index) => (
                <div key={index} className="mr-6 last:mr-0">
                    {component}
                </div>
            ))}
        </Flex>
    );
}