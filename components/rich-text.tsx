import { RichText as Primitive } from "basehub/react-rich-text";
import { highlight } from "fumadocs-core/server";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ComponentProps, useMemo } from "react";

const components = {
  async pre(props) {
    return await highlight(props.code, {
      lang: props.language,
      themes: {
        light: "catppuccin-latte",
        dark: "vesper",
      },
      components: {
        pre: (props) => (
          <CodeBlock {...props}>
            <Pre>{props.children}</Pre>
          </CodeBlock>
        ),
      },
    });
  },
} as ComponentProps<typeof Primitive>["components"];

export function RichText(props: ComponentProps<typeof Primitive>) {
  return (
    <Primitive
      {...props}
      components={useMemo(
        () => ({ ...components, ...props.components }),
        [props.components]
      )}
    />
  );
}
