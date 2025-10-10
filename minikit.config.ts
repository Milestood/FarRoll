import { MiniAppConfig } from "@base-org/minikit";

const config: MiniAppConfig = {
  id: "farroll",
  name: "Farroll 🎲",
  description: "Mor zarlarla günlük 3 atış hakkı",
  iconUrl: "/dice-purple.png",
  splashImageUrl: "/dice-purple.png",
  tags: ["game", "dice", "fun"],
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },
};

export default config;
