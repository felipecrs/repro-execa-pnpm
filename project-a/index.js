import { execa } from 'execa';

export async function main() {
    await execa('ovsx', ['--version'], {
        preferLocal: true,
        stdio: 'inherit',
    })
}

if (import.meta.url === `file://${process.argv[1]}`) {
    await main();
}
