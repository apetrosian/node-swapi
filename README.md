# node-swapi 

Node wrapper around SWAPI - http://swapi.co/

## Requirements
- node: ">6.0.0"

## Installation

```bash
npm install node-swapi
```

## Usage

Require a library:

```javascript
// Require entire library
const SWAPI = require('node-swapi');

// or just a particular part, e. g. person
const {person} = require('node-swapi');
```

Request data from the server
```javascript


// get list of persons
SWAPI.person.list()

// get person with id 1
SWAPI.person.get(1)

// search for Luke Skywalker
SWAPI.person.search('Luke')
```
