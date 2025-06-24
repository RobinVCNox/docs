# Mintlify Starter Kit

Click on `Use this template` to copy the Mintlify starter kit. The starter kit contains examples including

- Guide pages
- Navigation
- Customizations
- API Reference pages
- Use of popular components

### Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command

```
npm i -g mintlify
```

Run the following command at the root of your documentation (where docs.json is)

```
mintlify dev
```

### Publishing Changes

Install our Github App to auto propagate changes from your repo to your deployment. Changes will be deployed to production automatically after pushing to the default branch. Find the link to install on your dashboard.

#### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install` it'll re-install dependencies.
- Page loads as a 404 - Make sure you are running in a folder with `docs.json`

### How to update the docs of an api
Currently we use [Mintlify](https://mintlify.com/) to host our documentation. This documentation hosting tool is currently located in a [Github repo](https://github.com/RobinVCNox/docs) where there is an openapi.json located in api-references folder. To update the documentation with the latest API changes, we generate the openapi.json in the sandbox api folder and copy the contents of this file, over to the github repo openapi.json.

This can be done with the following script at the api folder level. (above /app folder):
```bash
python generate_openapi.py
```

Afterwards we can redeploy the documentation website with the [Mintlify Dashboard editor](https://dashboard.mintlify.com/noxenergy/noxenergy/editor/main).