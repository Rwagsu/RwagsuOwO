import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import * as Fa6Icon from "react-icons/fa6";
import * as FaIcon from "react-icons/fa";
import * as SiIcon from "react-icons/si";
import {i18n} from "@/lib/i18n";

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    // i18n Support
    i18n,

    // Navbar Options
    nav: {
      title: 'RwagsuOwO',
    },

    // GitHub Link
    githubUrl: 'https://github.com/Rwagsu',

    // Social Links
    links: [
        {
            type: 'icon',
            label: 'Bilibili',
            icon: <Fa6Icon.FaBilibili/>,
            text: 'Bilibili',
            url: 'https://space.bilibili.com/2123349162',
        },
        {
            type: 'icon',
            label: 'BandLab',
            icon: <SiIcon.SiBandlab/>,
            text: 'BandLab',
            url: 'https://www.bandlab.com/rwagsu',
        },
        {
            type: 'icon',
            label: 'Afdian',
            icon: <FaIcon.FaDonate/>,
            text: 'Afdian',
            url: 'https://afdian.com/a/Rwagsu',
        },
    ]
  };
}
