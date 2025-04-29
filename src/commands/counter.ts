import type { CommandInteraction, Message } from "discord.js";
import type { SimpleCommandMessage } from "discordx";
import {
  Discord,
  SimpleCommand,
  SimpleCommandOption,
  SimpleCommandOptionType,
  Slash,
} from "discordx";
var x = 0;
@Discord()
export class Example {
  // make single handler for simple and slash command

  async count(command: CommandInteraction | Message): Promise<void> {
    await command.reply("I like it, Thanks" + x.toString());
  }

  @SimpleCommand({ name: "count" })
  async simpleCount(command: SimpleCommandMessage): Promise<void> {
    await this.count(command.message);
  }

  @Slash({ description: "counter", name: "count" })
  async slashCount(command: CommandInteraction): Promise<void> {
    await this.count(command);
  }

  async countadd(command: CommandInteraction | Message): Promise<void> {
    x += 1;
    await command.reply("current count: " + x.toString());
  }

  @SimpleCommand({ name: "countadd", aliases: ["count add"] })
  async simpleCountadd(command: SimpleCommandMessage): Promise<void> {
    await this.countadd(command.message);
  }

  @Slash({ description: "add to counter", name: "countadd"})
  async slashCountadd(command: CommandInteraction): Promise<void> {
    await this.countadd(command);
  }
}
