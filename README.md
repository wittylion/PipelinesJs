# Pipelines JS

[![npm](https://img.shields.io/npm/v/solid-pipelines.svg?style=plastic)](https://www.npmjs.com/package/solid-pipelines)

Pipelines JS is a project developed for purpose of composing logical blocks and actions into algorythm. Developing this project, next goals were claimed:

- Create a self-descriptive single-action processor
```ts
export class CreateTitle { }
export class CreateDescriptionBlock { }
export class HighlightSearchTextInDescription { }
```
- Possibility to combine processors together so they make up a bigger logical algorythm

```ts
export class ComposeNewsBlock {
    GetProcessors() {
        return [
            CreateTitle,
            CreateDescriptionBlock,
            HighlightSearchTextInDescription
        ]
    }
}
```
- It should be possible to extend algorythm (_i.e. in the sample above I would like to add crop possibility, capitilize logic and logging mechanism to check state of the news block after each processor_)

## Installation and Usage

```
$ npm install solid-pipelines
```