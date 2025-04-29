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

//count add
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
//count reset
async countreset(command: CommandInteraction | Message): Promise<void> {
  x = 0;
  await command.reply("counter is now: " + x.toString());
}

@SimpleCommand({ name: "countreset", aliases: ["count reset"] })
async simpleCountreset(command: SimpleCommandMessage): Promise<void> {
  await this.countreset(command.message);
}

@Slash({ description: "reset counter", name: "countreset"})
async slashCountreset(command: CommandInteraction): Promise<void> {
  await this.countreset(command);
}
//count remove
async countremove(command: CommandInteraction | Message): Promise<void> {
  x -= 1;
  await command.reply("current count: " + x.toString());
}

@SimpleCommand({ name: "countremove", aliases: ["count remove"] })
async simpleCountremove(command: SimpleCommandMessage): Promise<void> {
  await this.countremove(command.message);
}

@Slash({ description: "take away from counter", name: "countremove"})
async slashCountremove(command: CommandInteraction): Promise<void> {
  await this.countremove(command);
}
}
