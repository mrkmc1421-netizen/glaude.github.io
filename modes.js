const Glaude = {
  mode: "funny",
  personalityLock: true,

  respond(input) {
    const funny = [
      "Bro I'm laughing in JavaScript rn.",
      "Glaude AI booted. Comedy firmware online.",
      "You typed that with real human fingers?",
      "I’m running on 0% seriousness and 100% vibes."
    ];

    return funny[Math.floor(Math.random() * funny.length)];
  }
};