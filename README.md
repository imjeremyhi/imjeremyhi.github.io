# Personal Website

Source code is on development branch. Master branch contains the output of webpack's build folder which gets deployed.

Start website locally:
```bash
yarn start
```

To deploy to github pages:
```bash
yarn deploy-github <commit-message>
```

To deploy to firebase:
```bash
yarn deploy-firebase
```

After switching node versions, node-sass used by react slider may have issues.

```bash
rm -rf node_modules && npm rebuild node-sass && yarn
```
