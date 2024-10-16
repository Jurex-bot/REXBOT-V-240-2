module.exports = {
    name: "rules",
    description: "Displays the rules for the group chat",
    nashPrefix: false,
    version: "1.0.0",
    role: 0,
    cooldowns: 5,
    async execute(api, event, args) {
        const { threadID, messageID } = event;

        const rules = `
[ 𝚁𝚄𝙻𝙴𝚂 ]\n\n
1.Be respectful: Treat everyone in the group with kindness and respect.
2.No spamming: Avoid sending repetitive or irrelevant messages.
3.Stay on topic: Keep discussions relevant to the group’s purpose.
4.No personal information: Do not share personal details of yourself or others without permission.
5.Follow the group’s purpose: Ensure your messages contribute to the educational or informational goals of the group.
6.Autokick: if someone underestimate the rules and seen by admin will be automatedly kick with admin
7. Adminlist: Bro. Jureden, Bro. Eric, Bro. Jhanmark, Bro. Johnny, Bro. Jurex
7.Report issues: If you encounter any issues or have concerns, contact a group admin. or Jurex Aso for more information or action
        `;

        api.sendMessage(rules, threadID, messageID);
    },
};
