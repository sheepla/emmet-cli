import { Command, expand } from "./deps.ts";

const { options, args } = await new Command()
  .name("emmet-cli")
  .version("v0.0.1")
  .description("A simple command to expand Emmet expression")
  .option("-s, --stylesheet", "Stylesheet mode")
  .arguments("<expr:string>")
  .parse(Deno.args);

const result: string = expand(args[0], {
  type: options.stylesheet ? "stylesheet" : "markup",
});

console.log(result);
