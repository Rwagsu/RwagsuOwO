import Link from "fumadocs-core/link";

export default async function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to Fumadocs</h1>
      <p className="text-fd-muted-foreground">
        This is an example to use Fumadocs with BaseHub.
      </p>
      <div className="flex flex-row items-center justify-center mt-4 gap-4">
        <Link
          href="/docs"
          className="text-fd-foreground hover:text-fd-primary font-medium underline"
        >
          /docs
        </Link>
        <Link
          href="https://github.com/fuma-nama/fumadocs-basehub"
          className="text-fd-foreground hover:text-fd-primary font-medium underline"
        >
          /repo
        </Link>
      </div>
    </main>
  );
}
