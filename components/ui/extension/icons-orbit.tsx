import NextImage from 'next/image';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { cn } from '@/lib/cn';

// 图标列表（按文件名排序）
const icons = [
    'Affinity',
    'Aseprite',
    'Blender',
    'BlockBench',
    'Clip_Studio_Paint',
    'Compressor',
    'Davinci_Resolve',
    'Final_Cut_Pro',
    'Freeform',
    'GitHub_Desktop',
    'GitHub',
    'Godot',
    'Houdini',
    'IntelliJ IDEA',
    'Logic_Pro',
    'MagicaVoxel',
    'Minecraft',
    'Motion',
    'OBS_Studio',
    'Pixel_Composer',
    'Pixelmator Pro',
    'Rider',
    'Unreal_Engine',
    'Visual_Studio',
    'VSCode',
    'WebStorm',
];

// 将图标平均分配到三个圆环
function distributeIcons(iconList: string[]) {
    const rings: [string[], string[], string[]] = [[], [], []];
    iconList.forEach((icon, index) => {
        rings[index % 3].push(icon);
    });
    return rings;
}

interface IconImageProps {
    name: string;
    size: number;
}

function IconImage({ name, size }: IconImageProps) {
    return (
        <NextImage
            src={`/icons/${name}.png`}
            alt={name}
            width={size}
            height={size}
            className="object-contain"
        />
    );
}

export function IconsOrbit({className}: {className?: string}) {
    const [ring1, ring2, ring3] = distributeIcons(icons);

    return (
        <div className={cn("relative flex h-[1600px] w-full flex-col items-center justify-center", className)}>
            {/* Outer ring */}
            <OrbitingCircles
                iconSize={80}
                radius={800}
                speed={0.5}
            >
                {ring1.map((icon) => (
                    <IconImage key={icon} name={icon} size={80} />
                ))}
            </OrbitingCircles>

            {/* Middle Ring */}
            <OrbitingCircles
                iconSize={80}
                radius={650}
                reverse
                speed={1}>
                {ring2.map((icon) => (
                    <IconImage key={icon} name={icon} size={80} />
                ))}
            </OrbitingCircles>

            {/* Inner ring */}
            <OrbitingCircles
                iconSize={80}
                radius={500}
                speed={0.7}
            >
                {ring3.map((icon) => (
                    <IconImage key={icon} name={icon} size={80} />
                ))}
            </OrbitingCircles>
        </div>
    );
}
