import * as fs from "fs";

interface Props {
  params: { path: string[] };
}

export default function Page({ params }: Props) {
  const content = fs.readFileSync(
    `./public/bibles/HSV/${params.path[0].replace("_", " ")}/${
      params.path[1]
    }/README.md`,
    {
      encoding: "utf-8",
    }
  );

  return (
    <main>
      <p className="whitespace-pre-line">{content}</p>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync("./public/bibles/HSV")
    .map((book) =>
      fs.readdirSync(`./public/bibles/HSV/${book}`).map((chapter) => ({
        params: { path: [book.replace(" ", "_"), chapter] },
      }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
}
