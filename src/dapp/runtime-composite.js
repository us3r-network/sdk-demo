// This is an auto-generated file, do not edit manually
export const definition = {
  "models": {
    "Dapp": {
      "id": "kjzl6hvfrbw6cakdqkmlv1vk5rd0vcwfwio0fuglf24vrjkoitx7pxegxf8jovc",
      "accountRelation": { "type": "list" },
    },
  },
  "objects": {
    "DappSocialLink": {
      "url": { "type": "uri", "required": true },
      "platform": { "type": "string", "required": true },
    },
    "Dapp": {
      "url": { "type": "uri", "required": false },
      "icon": { "type": "uri", "required": false },
      "name": { "type": "string", "required": true },
      "tags": {
        "type": "list",
        "required": false,
        "item": { "type": "string", "required": false },
      },
      "models": {
        "type": "list",
        "required": false,
        "item": { "type": "streamid", "required": false },
      },
      "socialLink": {
        "type": "list",
        "required": false,
        "item": {
          "type": "reference",
          "refType": "object",
          "refName": "DappSocialLink",
          "required": false,
        },
      },
      "description": { "type": "string", "required": false },
      "version": { "type": "view", "viewType": "documentVersion" },
    },
  },
  "enums": {},
  "accountData": { "dappList": { "type": "connection", "name": "Dapp" } },
};
