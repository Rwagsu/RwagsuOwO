import readingTime, { ReadTimeResults } from 'reading-time';
import { IoMdBook } from "react-icons/io";
import { Flex, Text } from '@radix-ui/themes';
import { ExpandTranslation } from '@/lib/i18n';

export function ReadingTime({ stats, lang }: { stats: ReadTimeResults, lang: string }) {
    const lessThanOneMinuteText = lang === 'en' ? ExpandTranslation.en.ReadingTime.lessThanOneMinute : ExpandTranslation.cn.ReadingTime.lessThanOneMinute;
    const minutesText = lang === 'en' ? ExpandTranslation.en.ReadingTime.minute : ExpandTranslation.cn.ReadingTime.minute;

    const roundedMinutes = Math.round(stats.minutes * 10) / 10;
    const displayText = roundedMinutes < 1 ? lessThanOneMinuteText : `${roundedMinutes} ${minutesText}`;
    
    return (
        <Flex gap="2" align="center" style={{ lineHeight: 1 }}>
            <IoMdBook style={{ alignSelf: 'center', fontSize: '20px', marginTop: '-1px' }}/>
            <Text weight="medium" trim="both" style={{ lineHeight: 1 }}>{displayText}</Text>
        </Flex>
    );
}