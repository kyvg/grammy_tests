import { Chats } from "./chats.ts";
import { Bot } from "grammy";
import type { Context } from "grammy"

/// Setup Bot
type MyContext = Context; // Can be extended.

const bot = new Bot<MyContext>("token");

bot.command("start", async (ctx) => {
  /* const sent = */ await ctx.reply("Hello.");
  // console.log(sent); // Dynamically generated!
});

bot.callbackQuery('button_test',  async (ctx) => {
  await ctx.reply("Button pressed")
})

/// Test setup
const chats = new Chats(bot);

const user = chats.newUser({
  id: 123,
  blocked: false,
  username: "mak",
  first_name: "kek",
  last_name: "none",
  language_code: "en",
});

// user.join(group.chat_id);
user.onEvent("message", (m) => {
  console.log("User recieved a message from the bot saying", m.text);
});


async function main() {
  // Send a message to the bot.
  await user.command("start");
  await user.callbackQuery("button_test")
  // Send a message to the group.
  // await user.in(group).sendMessage("Hi everyone!");

  // or first declare a state of the user:
  // const userInGroup = owner.in(group);
  // await userInGroup.command("start");
  // and other properties can be accesses as well:
  // userInGroup.sendVideo(...)
  await new Promise((r) => {
    setTimeout(r, 5000)
  })
}

main()
