const namedBlockSlotNoProgram = {
  'slotName': 'block-a',
  'program': {
    'type': 'Program',
    'body': [

    ],
    'blockParams': [

    ],
    'loc': null,
    'chained': false
  },
  'loc': {
    'source': null,
    'start': {
      'line': 1,
      'column': 16
    },
    'end': {
      'line': 1,
      'column': 55
    }
  }
};

function generateSlotChain(slotNames) {
  if (slotNames.length > 0) {
    const currentName = slotNames[1];
    const rest = slotNames.slice(1);
    return [{
      'slotName': currentName,
      'program': {
        'type': 'Program',
        'body': [

        ],
        'blockParams': [

        ],
        'loc': null,
        'chained': false
      },
      'loc': {
        'source': null,
        'start': {
          'line': 1,
          'column': 16
        },
        'end': {
          'line': 1,
          'column': 55
        }
      }
    }, generateSlotChain(rest)];
  }

  return null;
}

module.exports = {
  namedBlockSlotNoProgram: namedBlockSlotNoProgram,
  generateSlotChain: generateSlotChain
};
