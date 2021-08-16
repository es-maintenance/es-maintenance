# @es-maintenance/static-analysis

A tool to measure the ability to statically analyze a JS/TS codebase.

## Status

Work in Progress

## Background

The ability to statically analyze a codebase is crucial for codebases of all sizes, and becomes more and more useful as the codebase grows. The higher the percentage of statically analyzable code helps with the following:

* Easier to write tooling for the codebase (i.e. [jscodeshift](https://github.com/facebook/jscodeshift) codemods, ESLint, etc.)
* Each individual file is more easily understood by a human reading it.
