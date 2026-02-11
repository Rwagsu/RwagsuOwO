import { ImageWithFallback } from '@/components/ImageWithFallback';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageWithFallback {...props} />,
    ...TabsComponents,
    ...components,
  };
}
