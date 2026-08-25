import * as path from 'https://deno.land/std/path/mod.ts';

export default class LevainPaths {
    private static readonly sourceRootDir = path.resolve(
        path.dirname(path.fromFileUrl(import.meta.url)),
        '..',
        '..',
    );

    static get isCompiledBinary(): boolean {
        return Deno.args.includes('--is_compiled_binary');
    }

    static get levainRootFile(): string {
        return LevainPaths.isCompiledBinary
            ? Deno.execPath()
            : path.resolve(LevainPaths.sourceRootDir, 'levain.ts');
    }

    static get levainRootDir(): string {
        return LevainPaths.isCompiledBinary
            ? path.dirname(Deno.execPath())
            : LevainPaths.sourceRootDir;
    }
}
