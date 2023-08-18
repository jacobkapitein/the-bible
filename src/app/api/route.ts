import * as fs from "fs";

export async function GET(request: Request) {
  // Get query param called 'book'
  const { searchParams } = new URL(request.url);
  const book = searchParams.get("book");
  const chapter = searchParams.get("chapter");

  // Read the MD file from the file system in ./public/bibles/HSV
  const data = fs.readFileSync(
    `${process.cwd()}/public/bibles/HSV/${book}/${chapter}/README.md`,
    {
      encoding: "utf8",
    }
  );

  console.debug(data);

  return new Response("Hello world!", { status: 200 });
}
