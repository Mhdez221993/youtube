# YouTube Clone

This is my own youtube version, a fully functional application, that allows you to upload videos and songs.
You can like, comment and subscribe to others' uploads

## Project Setup

1. Upon cloning this repo, add your node version in the "engines" section of the root package.json file.

- You can find out your node version by running the command `node -v` in your terminal.

2. Install dependencies for package.json files for server (in root of project) and for client (in "client" folder)

```bash
npm install
cd client && npm install
```

3. In the root folder genrate migrations

```
npm run generate
```

3. Run dev script in project root to run both server and client scripts simultaneously.

- Note: Make sure you are not in the "client" folder

```bash
npm run dev
```

## Global Dependencies Required

- [Node 10+](https://node.js.org)
- [NPM 5+](https://node.js.org)
- [Git](https://git-scm.com/)

## Accounts Required

- [Heroku Account](https://signup.heroku.com/)
- [Google Account](https://accounts.google.com/signup/v2/webcreateaccount?service=mail)

## Recommended Tools

- [VS Code](https://code.visualstudio.com)
- [Insomnia Core](https://insomnia.rest/)
- [Google Chrome](https://www.google.com/chrome/)

## Extensions for VSCode

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

## Helpful Links

- [Google Developer Console](https://console.developers.google.com/)
- [Prisma Docs](https://prisma.io)
- [Cloudinary Documentation](https://cloudinary.com/documentation/)
