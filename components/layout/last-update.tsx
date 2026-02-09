import { Flex, Text } from "@radix-ui/themes";
import { FaRegClock } from "react-icons/fa6";

export default function LastUpdate({ time, lang }: { time: Date, lang: string }) {

    return (
        <Flex gap="2" align="center" style={{ lineHeight: 1 }}>
            <FaRegClock style={{ alignSelf: 'center', marginTop: '-1px' }} />
            <Text weight="medium" trim="both" style={{ lineHeight: 1 }}>{time.toLocaleDateString(lang === "en" ? "en-US" : "zh-CN")}</Text>
        </Flex>
    )
}