import { Command, expand } from "./deps.ts";

const { options, args } = await new Command()
  .name("emmet-cli")
  .version("v0.0.1")
  .description("A simple command to expand Emmet expression")
  .option("-s, --stylesheet", "Stylesheet mode")
  .arguments("<expr:string> [text:string]")
  .parse(Deno.args);

if (args.length < 1) {
  console.error("Must require arguments.");
  Deno.exit(1);
}

if (1 < args.length) {
  console.error("Too many arguments.");
  Deno.exit(1);
}

const result: string = expand(args[0], {
  type: options.stylesheet ? "stylesheet" : "markup",
});

console.log(result);
