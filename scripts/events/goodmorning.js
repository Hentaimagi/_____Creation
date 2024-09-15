module.exports = {
  config: {
    name: "goodmorning",
    version: "1.0",
    author: "Tanvir",
    countDown: 5,
    role: 0,
    shortDescription: "Sends a Good Morning message at 6:00 AM",
    longDescription: "Automatically sends a Good Morning message at 6:00 AM every day.",
    category: "Utilities",
    guide: "{pn}"
  },

  onLoad: function ({ schedule }) {
    const sendGoodMorningMessage = async function ({ message }) {
      message.send("Good Morning! এখন সবাই উইঠা পড়ো!");
    };

    // Schedule the task to run at 6:00 AM daily
    schedule("0 6 * * *", sendGoodMorningMessage);
  }
};
