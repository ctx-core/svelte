# @ctx-core/svelte

## 13.4.35

### Patch Changes

- @ctx-core/array: ^26.11.4 -> ^26.11.5

## 13.4.34

### Patch Changes

- @ctx-core/object: ^24.1.7 -> ^24.1.8
- @ctx-core/array: ^26.11.3 -> ^26.11.4

## 13.4.33

### Patch Changes

- @ctx-core/array: ^26.11.2 -> ^26.11.3
- @ctx-core/object: ^24.1.6 -> ^24.1.7

## 13.4.32

### Patch Changes

- fix: `throw new Error(error_message)` instead of `throw error_message`

## 13.4.31

### Patch Changes

- @ctx-core/object: ^24.1.5 -> ^24.1.6
- @ctx-core/array: ^26.11.1 -> ^26.11.2

## 13.4.30

### Patch Changes

- @ctx-core/array: ^26.11.0 -> ^26.11.1

## 13.4.29

### Patch Changes

- @ctx-core/array: ^26.10.2 -> ^26.11.0
- Updated dependencies
  - @ctx-core/object@24.1.5

## 13.4.28

### Patch Changes

- @ctx-core/array: ^26.10.1 -> ^26.10.2

## 13.4.27

### Patch Changes

- @ctx-core/array: ^26.10.0 -> ^26.10.1

## 13.4.26

### Patch Changes

- @ctx-core/array: ^26.9.0 -> ^26.10.0

## 13.4.25

### Patch Changes

- @ctx-core/array: ^26.8.17 -> ^26.9.0

## 13.4.24

### Patch Changes

- @ctx-core/object: ^24.1.3 -> ^24.1.4
- Updated dependencies
  - @ctx-core/array@26.8.17

## 13.4.23

### Patch Changes

- @ctx-core/object: ^24.1.2 -> ^24.1.3
- Updated dependencies
  - @ctx-core/array@26.8.16

## 13.4.22

### Patch Changes

- @ctx-core/array: ^26.8.14 -> ^26.8.15

## 13.4.21

### Patch Changes

- @ctx-core/object: ^24.1.1 -> ^24.1.2
- Updated dependencies
  - @ctx-core/array@26.8.14

## 13.4.20

### Patch Changes

- tsconfig.json: - importsNotUsedAsValues
- Updated dependencies
  - @ctx-core/array@26.8.13
  - @ctx-core/number@8.6.1
  - @ctx-core/object@24.1.1

## 13.4.19

### Patch Changes

- @ctx-core/object: ^24.0.0 -> ^24.0.1
- Updated dependencies
  - @ctx-core/array@26.8.12

## 13.4.18

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/object@24.0.0
  - @ctx-core/array@26.8.11

## 13.4.17

### Patch Changes

- svelte: ^3.55.0 -> ^3.55.1

## 13.4.16

### Patch Changes

- @ctx-core/object: ^23.0.1 -> ^23.1.0
- Updated dependencies
  - @ctx-core/array@26.8.10

## 13.4.15

### Patch Changes

- @ctx-core/object: ^23.0.0 -> ^23.0.1
- Updated dependencies
  - @ctx-core/array@26.8.9

## 13.4.14

### Patch Changes

- Updated dependencies
  - @ctx-core/object@23.0.0
  - @ctx-core/array@26.8.8

## 13.4.13

### Patch Changes

- @ctx-core/object: ^22.9.1 -> ^22.10.0
- Updated dependencies
  - @ctx-core/array@26.8.7

## 13.4.12

### Patch Changes

- @ctx-core/object: ^22.9.0 -> ^22.9.1
- Updated dependencies
  - @ctx-core/array@26.8.6

## 13.4.11

### Patch Changes

- @ctx-core/object: ^22.8.2 -> ^22.9.0
- Updated dependencies
  - @ctx-core/array@26.8.5

## 13.4.10

### Patch Changes

- @ctx-core/object: ^22.8.0 -> ^22.8.2
- Updated dependencies
  - @ctx-core/array@26.8.4

## 13.4.9

### Patch Changes

- @ctx-core/object: ^22.6.0 -> ^22.7.0
- Updated dependencies
- Updated dependencies
  - @ctx-core/array@26.8.3
  - @ctx-core/object@22.8.0

## 13.4.8

### Patch Changes

- @ctx-core/object: ^22.5.0 -> ^22.6.0
- Updated dependencies
  - @ctx-core/array@26.8.2

## 13.4.7

### Patch Changes

- @ctx-core/object: ^22.4.1 -> ^22.5.0
- Updated dependencies
  - @ctx-core/array@26.8.1

## 13.4.6

### Patch Changes

- svelte: ^3.54.0 -> ^3.55.0

## 13.4.5

### Patch Changes

- svelte: ^3.53.1 -> ^3.54.0

## 13.4.4

### Patch Changes

- svelte: ^3.53.0 -> ^3.53.1

## 13.4.3

### Patch Changes

- svelte: ^3.52.0 -> ^3.53.0

## 13.4.2

### Patch Changes

- svelte: ^3.51.0 -> ^3.52.0

## 13.4.1

### Patch Changes

- svelte: ^3.50.1 -> ^3.51.0

## 13.4.0

### Minor Changes

- feat:

  readable**set*o* aliased by readable**set*ctx*
  readable**set_o**T aliased by readable**set_ctx**T
  readable*set_o* aliased by readable*set_ctx*
  readable_set_o_T aliased by readable_set_ctx_T
  readable_set_o\_\_set_T aliased by readable_set_ctx$\_T

## 13.3.0

### Minor Changes

- mix_refresh:

  relaxed arguments: readable: Readable<store_T>, set?: tyeof readable extends Writable<store_T> ? undefined : Subscriber<store_T>
  refresh: always works on readable regardless from closure: replaces `this` function binding

## 13.2.0

### Minor Changes

- mixin_refresh=>mix_refresh

## 13.1.0

### Minor Changes

- feat:

  mixin*refresh
  ready\_\_
  refresh_mixin_T
  refresh_writable*
  refresh_writable_T

## 13.0.3

### Patch Changes

- svelte: ^3.50.0 -> ^3.50.1

## 13.0.2

### Patch Changes

- svelte: ^3.49.0 -> ^3.50.0

## 13.0.1

### Patch Changes

- subscribe_wait_timeout: calls subscribe_wait

## 13.0.0

### Major Changes

- subscribe_wait,subscribe_wait_timeout: condition argument is required

## 12.1.0

### Minor Changes

- subscribe_wait: optional timeout argument

## 12.0.5

### Patch Changes

- tsx: ^3.8.2 -> ^3.9.0
- Updated dependencies
  - @ctx-core/array@26.7.7
  - @ctx-core/object@22.2.7

## 12.0.4

### Patch Changes

- readable*set_a*: returns a Readable\_

## 12.0.3

### Patch Changes

- @ctx-core/array: ^26.6.0 -> ^26.7.0
- Updated dependencies
  - @ctx-core/array@26.7.1

## 12.0.2

### Patch Changes

- readable*,derived*,mix*readable*,readable*fn*: fix: assign props onto the object

## 12.0.1

### Patch Changes

- fix: package.json: export

## 12.0.0

### Major Changes

- Extracted @ctx-core/svelte-preprocess

## 11.0.3

### Patch Changes

- version bump

## 11.0.2

### Patch Changes

- fix: export node types

## 11.0.1

### Patch Changes

- fix: import @ctx-core/svelte/node

## 11.0.0

### Major Changes

- separate @ctx-core/svelte/node

## 10.3.3

### Patch Changes

- - console.debug message

## 10.3.2

### Patch Changes

- fix: writable*fn*,writable\_: get(atom)

## 10.3.1

### Patch Changes

- fix: import

  fix: readable

## 10.3.0

### Minor Changes

- .js + .d.ts instead of .ts

## 10.2.3

### Patch Changes

- svelte: ^3.48.0 -> ^3.49.0

## 10.2.2

### Patch Changes

- "@ctx-core/array": "^26.6.0"

## 10.2.1

### Patch Changes

- @ctx-core/array: 26.5.2

## 10.2.0

### Minor Changes

- \__ suffix aliased by \$_

### Patch Changes

- Updated dependencies
  - @ctx-core/array@26.5.0

## 10.1.24

### Patch Changes

- @ctx-core/object: 22.2.0
- Updated dependencies
  - @ctx-core/array@26.4.3

## 10.1.23

### Patch Changes

- @ctx-core/array: 26.4.2

## 10.1.22

### Patch Changes

- update dependencies

## 10.1.21

### Patch Changes

- @ctx-core/array: ^26.2.4 -> ^26.3.0

## 10.1.20

### Patch Changes

- update dependencies

## 10.1.19

### Patch Changes

- update dependencies

## 10.1.18

### Patch Changes

- @ctx-core/array: ^26.2.2 -> ^26.2.3
- @ctx-core/object: ^22.1.9 -> ^22.1.10

## 10.1.17

### Patch Changes

- svelte: ^3.47.0 -> ^3.48.0

## 10.1.16

### Patch Changes

- update dependencies
- Updated dependencies
  - @ctx-core/array@26.2.2

## 10.1.15

### Patch Changes

- @ctx-core/function: 20.7.1
- Updated dependencies
  - @ctx-core/array@26.2.1
  - @ctx-core/object@22.1.8

## 10.1.14

### Patch Changes

- @ctx-core/array: 26.2.0
- Updated dependencies
  - @ctx-core/object@22.1.7

## 10.1.13

### Patch Changes

- fix: @ctx-core/\* dependencies
- Updated dependencies
  - @ctx-core/array@26.1.4
  - @ctx-core/object@22.1.5

## 10.1.12

### Patch Changes

- package.json: exports: update
- fix: package.json: exports: + default
- Updated dependencies
  - @ctx-core/array@26.1.3
  - @ctx-core/object@22.1.4

## 10.1.11

### Patch Changes

- svelte: ^3.46.6 -> ^3.47.0

## 10.1.10

### Patch Changes

- update dependencies

## 10.1.9

### Patch Changes

- version bump

## 10.1.8

### Patch Changes

- update dependencies
- Updated dependencies
  - @ctx-core/array@24.0.2

## 10.1.7

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/array@24.0.0

## 10.1.6

### Patch Changes

- 738370415: svelte: ^3.45.0 -> ^3.46.1

## 10.1.5

### Patch Changes

- sideEffects = false
- Updated dependencies
  - @ctx-core/array@23.1.4
  - @ctx-core/object@22.0.12

## 10.1.4

### Patch Changes

- @swc/core: ^1.2.125 -> ^1.2.127
- svelte: ^3.44.3 -> ^3.45.0
- Updated dependencies
  - @ctx-core/array@23.1.3
  - @ctx-core/object@22.0.11

## 10.1.3

### Patch Changes

- version bump
- Updated dependencies
  - @ctx-core/array@23.1.2
  - @ctx-core/object@22.0.10

## 10.1.2

### Patch Changes

- .js + .d.ts instead of .ts

## 10.1.1

### Patch Changes

- fix: llContext: returns Val

## 10.1.0

### Minor Changes

- llContext: + <Val> generic: lazy loaded value type

## 10.0.50

### Patch Changes

- fix: error TS6059: \* is not under 'rootDir': package.json: types: ./dist/index.d.ts

## 10.0.49

### Patch Changes

- tsconfig.json: "target": "ES2021"

## 10.0.48

### Patch Changes

- package.json: "types": "./src/index.ts": better editing experience

## 10.0.47

### Patch Changes

- fix: build

## 10.0.46

### Patch Changes

- \*.d.ts export

## 10.0.45

### Patch Changes

- fix: tsconfig.json: "rootDir": "."

## 10.0.44

### Patch Changes

- fix: package.json: exports

## 10.0.43

### Patch Changes

- package.json: svelte: ./dist/index.js

## 10.0.42

### Patch Changes

- svelte: 3.44.2 -> 3.44.3

## 10.0.41

### Patch Changes

- package.json: - module

## 10.0.40

### Patch Changes

- package.json: - "main": explicitly not support cjs

## 10.0.39

### Patch Changes

- @swc/core: ^1.2.117 -> ^1.2.118

## 10.0.38

### Patch Changes

- @swc/core: ^1.2.116 -> ^1.2.117

## 10.0.37

### Patch Changes

- @swc/core: ^1.2.113 -> ^1.2.116

## 10.0.36

### Patch Changes

- @swc/cli: ^0.1.51 -> ^0.1.52
- @swc/core: ^1.2.111 -> ^1.2.113

## 10.0.35

### Patch Changes

- svelte: 3.44.1 -> 3.44.2
- @swc/core: ^1.2.110 -> ^1.2.111

## 10.0.34

### Patch Changes

- typescript: ^4.4.4 -> ^4.5.2
- @swc/core: ^1.2.108 -> ^1.2.110

## 10.0.33

### Patch Changes

- @swc/core: ^1.2.107 -> ^1.2.108

## 10.0.32

### Patch Changes

- compile using swc

## 10.0.31

### Patch Changes

- svelte: 3.44.0 -> 3.44.1

## 10.0.30

### Patch Changes

- typescript: ^4.4.3 -> ^4.4.4
- svelte: 3.43.1 -> 3.44.0

## 10.0.29

### Patch Changes

- svelte: 3.43.0 -> 3.43.1

## 10.0.28

### Patch Changes

- svelte: 3.42.6 -> 3.43.0

## 10.0.27

### Patch Changes

- svelte: 3.42.5 -> 3.42.6

## 10.0.26

### Patch Changes

- typescript: ^4.4.2 -> ^4.4.3

## 10.0.25

### Patch Changes

- svelte: 3.42.4 -> 3.42.5

## 10.0.24

### Patch Changes

- svelte: 3.42.3 -> 3.42.4

## 10.0.23

### Patch Changes

- typescript: ^4.3.5 -> ^4.4.2

## 10.0.22

### Patch Changes

- svelte: 3.42.2 -> 3.42.3

## 10.0.21

### Patch Changes

- svelte: 3.42.1 -> 3.42.2

## 10.0.20

### Patch Changes

- svelte: 3.41.0 -> 3.42.1

## 10.0.19

### Patch Changes

- svelte: 3.40.3 -> 3.41.0

## 10.0.18

### Patch Changes

- svelte: 3.40.2 -> 3.40.3

## 10.0.17

### Patch Changes

- svelte: 3.40.1 -> 3.40.2

## 10.0.16

### Patch Changes

- svelte: 3.40.0 -> 3.40.1
- update dependencies

## 10.0.15

### Patch Changes

- svelte: 3.38.3 -> 3.40.0

## 10.0.14

### Patch Changes

- fix: "exports": "./package.json": "./package.json"

## 10.0.13

### Patch Changes

- exports: + "package.json": "./package.json"

## 10.0.12

### Patch Changes

- fix: sourceMappingURL: "mapRoot": ""

## 10.0.11

### Patch Changes

- tsconfig.json: "target": "es2019"

## 10.0.10

### Patch Changes

- fix: EventDispatche type: models svelte update

## 10.0.9

### Patch Changes

- fix: cjs: load as a Promise

## 10.0.8

### Patch Changes

- "main": "./dist/index.cjs"

## 10.0.7

### Patch Changes

- fix: index.cjs: module.exports = require('./index.js')

## 10.0.6

### Patch Changes

- back to esm module with cjs using esm npm package to load library

## 10.0.5

### Patch Changes

- support cjs & esm: + "exports"

## 10.0.4

### Patch Changes

- fix: module imports;types

## 10.0.3

### Patch Changes

- fix: browser import

## 10.0.2

### Patch Changes

- fix: "type": "module"

## 10.0.1

### Patch Changes

- 2a6971f80: fix: "type": "module"
- fix: "type": "module"

## 10.0.0

### Major Changes

- "type": "module": module npm type

## 9.0.13

### Patch Changes

- fix: preprocess\_,compose_preprocess_a_key: types

## 9.0.12

### Patch Changes

- typescript: ^4.3.4 -> ^4.3.5

## 9.0.11

### Patch Changes

- dist directory

## 9.0.10

### Patch Changes

- tsconfig.json: "lib": ["dom", "ESNext"]

## 9.0.9

### Patch Changes

- svelte: 3.38.2 -> 3.38.3

## 9.0.8

### Patch Changes

- "prepublishOnly": "npm run clean && npm run compile"

## 9.0.7

### Patch Changes

- fix: deploying \*.js files

## 9.0.6

### Patch Changes

- "prepare": "npm run clean && npm run compile"

## 9.0.5

### Patch Changes

- npm run prepare instead of npm run prepublishOnly

## 9.0.4

### Patch Changes

- fix: npm run clean

## 9.0.3

### Patch Changes

- typescript: ^4.3.3 -> ^4.3.4

## 9.0.2

### Patch Changes

- typescript: ^4.3.2 -> ^4.3.3

## 9.0.1

### Patch Changes

- fix: browser: load "./src/browser/index.js"

## 9.0.0

### Major Changes

- move from dist to src directory

## 8.0.2

### Patch Changes

- version bump: run build

## 8.0.1

### Patch Changes

- fix: build: clean up old build files in dist

## 8.0.0

### Major Changes

- \$ suffix for stores
- \_ suffix for factory functions

## 7.5.2

### Patch Changes

- update dependencies

## 7.5.1

### Patch Changes

- fix: package.json: "browser": points to dist directory

## 7.5.0

### Minor Changes

- fix tsc build directory issues

## 7.4.2

### Patch Changes

- cleanup src: - _.js,_.d.ts

## 7.4.1

### Patch Changes

- .gitignore: - \*.js

## 7.4.0

### Minor Changes

- dist,types directory: addressing typescript build issues

## 7.3.3

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue

## 7.3.2

### Patch Changes

- .npmignore: + ~

## 7.3.1

### Patch Changes

- fix: target: 2018: nodejs compatability

## 7.3.0

### Minor Changes

- "noImplicitAny": true

## 7.2.13

### Patch Changes

- svelte: 3.38.1 -> 3.38.2

## 7.2.12

### Patch Changes

- svelte: 3.38.0 -> 3.38.1

## 7.2.11

### Patch Changes

- update dependencies

## 7.2.10

### Patch Changes

- update dependencies

## 7.2.9

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4

## 7.2.8

### Patch Changes

- "svelte": 3.37.0

## 7.2.7

### Patch Changes

- version bump

## 7.2.6

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834

## 7.2.5

### Patch Changes

- fix: npm run compile: tsc -b .

## 7.2.4

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3

## 7.2.3

### Patch Changes

- svelte: 3.34.0 -> 3.35.0

## 7.2.2

### Patch Changes

- svelte: 3.33.0 -> 3.34.0

## 7.2.1

### Patch Changes

- svelte: 3.32.3 -> 3.33.0

## 7.2.0

### Minor Changes

- \*\_T type naming

## 7.1.7

### Patch Changes

- version bump

## 7.1.6

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2

## 7.1.5

### Patch Changes

- svelte: 3.32.2 -> 3.32.3

## 7.1.4

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5

## 7.1.3

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4

## 7.1.2

### Patch Changes

- svelte: 3.32.1 -> 3.32.2

## 7.1.1

### Patch Changes

- \_preprocess aliases: export as

## 7.1.0

### Minor Changes

- build: node,browser

## 7.0.0

### Major Changes

- src directory

## 6.1.11

### Patch Changes

- svelte: 3.32.0 -> 3.32.1

## 6.1.10

### Patch Changes

- svelte: 3.31.2 -> 3.32.0

## 6.1.9

### Patch Changes

- svelte: 3.31.1 -> 3.31.2

## 6.1.8

### Patch Changes

- svelte: 3.31.0 -> 3.31.1

## 6.1.7

### Patch Changes

- - .rush

## 6.1.6

### Patch Changes

- fix: export alias type supporting "isolatedModules": true

## 6.1.5

### Patch Changes

- fix: export alias type with "isolatedModules": true

## 6.1.4

### Patch Changes

- using export as instead of export const

## 6.1.3

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3

## 6.1.2

### Patch Changes

- svelte: 3.30.1 -> 3.31.0

## 6.1.1

### Patch Changes

- svelte: 3.30.0 -> 3.30.1

## 6.1.0

### Minor Changes

- interface instead of type

## 6.0.13

### Patch Changes

- svelte: 3.29.7 -> 3.30.0

## 6.0.12

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2

## 6.0.11

### Patch Changes

- svelte: 3.29.6 -> 3.29.7

## 6.0.10

### Patch Changes

- svelte: 3.29.4 -> 3.29.6

## 6.0.9

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5

## 6.0.8

### Patch Changes

- svelte: 3.29.3 -> 3.29.4

## 6.0.7

### Patch Changes

- svelte: 3.29.0 -> 3.29.3

## 6.0.6

### Patch Changes

- svelte: 3.28.0 -> 3.29.0

## 6.0.5

### Patch Changes

- svelte: 3.27.0 -> 3.28.0

## 6.0.4

### Patch Changes

- svelte: 3.26.0 -> 3.27.0

## 6.0.3

### Patch Changes

- svelte: ~3.25.1 -> 3.26.0

## 6.0.2

### Patch Changes

- version bump to sync with npm

## 6.0.1

### Patch Changes

- version bump to sync with npm

## 6.0.0

### Major Changes

- Typescript strict checking

## 5.3.39

### Patch Changes

- fix: npm run compile: path to tsc

## 5.3.38

### Patch Changes

- typescript updates
