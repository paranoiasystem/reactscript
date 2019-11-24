reactscript
===========

ReactScript 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/reactscript.svg)](https://npmjs.org/package/reactscript)
[![Downloads/week](https://img.shields.io/npm/dw/reactscript.svg)](https://npmjs.org/package/reactscript)
[![License](https://img.shields.io/npm/l/reactscript.svg)](https://github.com/https://github.com/paranoiasystem/reactscript/reactscript/blob/master/package.json)

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
reactscript-cli/1.0.0 linux-x64 node-v10.15.2
$ reactscript-cli --help [COMMAND]
USAGE
  $ reactscript-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`reactscript-cli create [PROJECT_NAME]`](#reactscript-cli-create-project_name)
* [`reactscript-cli help [COMMAND]`](#reactscript-cli-help-command)

## `reactscript-cli create [PROJECT_NAME]`

create an empty starter project

```
USAGE
  $ reactscript-cli create [PROJECT_NAME]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ reactscript create new-app
```

_See code: [src/commands/create.ts](https://github.com/paranoiasystem/reactscript-cli/blob/v1.0.0/src/commands/create.ts)_

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
