# Gatsby Starter - TakeShape Portfolio

A [Gatsby](https://www.gatsbyjs.com/) starter for creating a portfolio website with [TakeShape](https://www.takeshape.io).

## Quickstart

1. First install the starter.

```console
$ npx gatsby new portfolio https://github.com/takeshape/gatsby-starter-takeshape-portfolio
```

> If you prefer you can simply
> [fork this template repository](https://github.com/ibrahima92/gatsby-shape-gallery/generate)
> and create your own repo. After you `git clone` it to your local computer, run
> `npm install` and follow these same steps.

2. Next, set up your TakeShape project. The following command will prompt you to
   import the pattern used in this starter.

```console
$ cd gatsby-shape-gallery
$ npm run setup
```

3. Create an API Key with `Dev` permissions in your TakeShape project.

   - Click on the project name in the upper left > API Keys > New API Key. Save your
     new API key somewhere.
   - Copy and save the project ID from the URL. It looks like this, the UUID
     value between `projects` and `api-keys`:
     `https://app.takeshape.io/projects/f5767c2f-debb-4af8-8966-4d4511d99a5c/api-keys`

4. Back in your Gatsby project, create a `.env` file in your project with following lines:

```inputrc
TAKESHAPE_PROJECT=<takeshape-project-id-from-url>
TAKESHAPE_TOKEN=<takeshape-api-key-you-copied>
```

5. Finally, start your local development site at `http://localhost:8000`

```console
$ npm start
```
