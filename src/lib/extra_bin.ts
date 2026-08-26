import * as path from "@std/path";

import LevainPaths from "./levain_paths.ts";

export default class ExtraBin {
  static get extraBinDir(): string {
    return path.resolve(LevainPaths.levainRootDir, "extra-bin", Deno.build.os);
  }

  static get sevenZipDir(): string {
    ExtraBin.onlyInWindows();
    return path.resolve(ExtraBin.extraBinDir, "7-Zip");
  }

  static get gitDir(): string {
    ExtraBin.onlyInWindows();
    return path.resolve(ExtraBin.extraBinDir, "git");
  }

  static get osUtilsDir(): string {
    ExtraBin.onlyInWindows();
    return path.resolve(ExtraBin.extraBinDir, "os-utils");
  }

  private static onlyInWindows() {
    if (Deno.build.os !== "windows") {
      throw new Error(`${Deno.build.os} not supported`);
    }
  }
}
