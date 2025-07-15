import { execa } from "execa";

export async function main() {
  const localDir = import.meta.dirname;
  await execa("open-cli", ["--version"], {
    preferLocal: true,
    localDir,
    stdio: "inherit",
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main();
}
