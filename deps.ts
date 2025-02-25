export * as Types from "@grammyjs/types";
export type {
  Bot,
  Context,
  RawApi,
} from "grammy";

// export type { Handler as HTMLParserHandler } from "https://deno.land/x/htmlparser@v4.1.1/htmlparser2/Parser.ts";
// export { Parser as HTMLParser } from "https://deno.land/x/htmlparser@v4.1.1/htmlparser2/Parser.ts";

// a basic debug implementation
// import * as c from "https://deno.land/std@0.180.0/fmt/colors.ts";
// const COLORS = [c.red, c.green, c.blue, c.magenta, c.yellow, c.gray];

// function colorFn(fn: (s: string) => string) {
//   return Deno.noColor ? (s: string) => s : fn;
// }

// export function debug(ns: string) {
//   ns = colorFn(COLORS[Math.floor(Math.random() * COLORS.length)])(ns);
//   return function (...data: unknown[]) {
//     const now = new Date().toLocaleTimeString("en-US", { hour12: false });
//     console.error(c.cyan(now), ns, ...data);
//   };
// }

export function debug(ns: string) {
  return function(...data: unknown[]) {
    const now = new Date().toLocaleTimeString("en-US", { hour12: false });
        console.error(now, ns, ...data);
  }
}