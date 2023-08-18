import { serverPath } from "@/helpers/serverPath";
import * as fs from "fs";
import { GetStaticPaths } from "next";

interface Props {
  params: { path: string[] };
}

export default function Page({ params }: Props) {
  const content = fs.readFileSync(
    serverPath(
      `/public/bibles/HSV/${params.path[0].replace("_", " ")}/${
        params.path[1]
      }/README.md`
    ),
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

export async function generateStaticParams() {
  const paths: { params: { path: string } }[] = fs
    .readdirSync(serverPath("/public/bibles/HSV"))
    .map((book) =>
      fs.readdirSync(`./public/bibles/HSV/${book}`).map((chapter) => ({
        params: { path: book.replace(" ", "_") },
      }))
    )
    .flat();

  return paths;
}
