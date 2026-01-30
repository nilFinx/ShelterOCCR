# nilFinx's shelter plugin (singular)

## Getting started
You should be using [pnpm](https://pnpm.io/) with this template ideally.

```sh
pnpm i 
pnpm lune dev plugins/shelteroccr
```

Ensure that Lune Dev Mode is enabled in Discord so that lune can connect to it.

Now you can start debugging. The plugin will automatically reload after every change.

## Installing
To then install your finished plugin in shelter you can either rely on GitHub pages and it's workflow or you can build and host them here temporarily.

### Building locally
To build the plugin:
```sh
pnpm lune ci
```
Look at dist now.
