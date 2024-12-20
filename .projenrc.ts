import { awscdk } from 'projen';
import { NpmAccess, ProseWrap, TrailingComma } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Mat Werber',
  authorAddress: 'matwerber@gmail.com',
  cdkVersion: '2.165.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: 'awscdk-constructs',
  packageName: '@matwerber/awscdk-constructs',
  npmAccess: NpmAccess.PUBLIC,
  prettier: true,
  prettierOptions: {
    ignoreFile: true,
    ignoreFileOptions: {
      ignorePatterns: ['.github/'],
    },
    yaml: true,
    settings: {
      printWidth: 100,
      proseWrap: ProseWrap.ALWAYS,
      singleQuote: true,
    },
  },
  projenrcTs: true,
  repositoryUrl: 'https://github.com/matwerber1/awscdk-constructs.git',
  license: 'MIT',
  gitIgnoreOptions: {
    ignorePatterns: [
      'ignore/', // local 'scratchpad' files I don't want to commit
    ],
  },
  publishToPypi: {
    distName: 'matwerber-awscdk-constructs',
    module: 'matwerber_awscdk_constructs',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
