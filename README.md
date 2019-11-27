reactscript-cli
===========

ReactScript CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/reactscript-cli.svg)](https://npmjs.org/package/reactscript-cli)
[![Downloads/week](https://img.shields.io/npm/dw/reactscript-cli.svg)](https://npmjs.org/package/reactscript-cli)
[![License](https://img.shields.io/npm/l/reactscript-cli.svg)](https://github.com/paranoiasystem/reactscript-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g reactscript-cli
$ reactscript-cli COMMAND
running command...
$ reactscript-cli (-v|--version|version)
reactscript-cli/1.1.2 linux-x64 node-v10.15.2
$ reactscript-cli --help [COMMAND]
USAGE
  $ reactscript-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`reactscript-cli component [COMPONENTNAME]`](#reactscript-cli-component-componentname)
* [`reactscript-cli create [PROJECTNAME]`](#reactscript-cli-create-projectname)
* [`reactscript-cli help [COMMAND]`](#reactscript-cli-help-command)

## `reactscript-cli component [COMPONENTNAME]`

create an empty component

```
USAGE
  $ reactscript-cli component [COMPONENTNAME]

OPTIONS
  -h, --help                     show CLI help
  -t, --type=class|c|function|f  (required)

EXAMPLE
  $ reactscript-cli component testComponent
```

_See code: [src/commands/component.ts](https://github.com/paranoiasystem/reactscript-cli/blob/v1.1.2/src/commands/component.ts)_

## `reactscript-cli create [PROJECTNAME]`

create an empty starter project

```
USAGE
  $ reactscript-cli create [PROJECTNAME]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ reactscript-cli create new-app
```

_See code: [src/commands/create.ts](https://github.com/paranoiasystem/reactscript-cli/blob/v1.1.2/src/commands/create.ts)_

## `reactscript-cli help [COMMAND]`

display help for reactscript-cli

```
USAGE
  $ reactscript-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
