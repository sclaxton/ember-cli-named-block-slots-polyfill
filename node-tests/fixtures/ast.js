const blockWithNoNamedSlots = {
  'type': 'BlockStatement',
  'path': {
    'type': 'PathExpression',
    'data': false,
    'depth': 0,
    'parts': [
      'named-block'
    ],
    'original': 'named-block',
    'loc': {
      'start': {
        'line': 1,
        'column': 3
      },
      'end': {
        'line': 1,
        'column': 14
      }
    }
  },
  'slotName': '',
  'params': [

  ],
  'program': {
    'type': 'Program',
    'body': [

    ]
  },
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 32
    }
  }
};

const transformedBlockWithNoNamedSlots = {
  'type': 'BlockStatement',
  'path': {
    'type': 'PathExpression',
    'data': false,
    'depth': 0,
    'parts': [
      'named-block'
    ],
    'original': 'named-block',
    'loc': {
      'start': {
        'line': 1,
        'column': 3
      },
      'end': {
        'line': 1,
        'column': 14
      }
    }
  },
  'hash': {
    'pairs': [],
    'type': 'Hash'
  },
  'params': [

  ],
  'program': {
    'type': 'Program',
    'blockParams': ['slot', 'params'],
    'body': [
      {
        'type': 'BlockStatement',
        'path': {
          'type': 'PathExpression',
          'data': false,
          'depth': 0,
          'parts': [
            'if'
          ],
          'original': 'if',
          'loc': {
            'start': {
              'line': 1,
              'column': 96
            },
            'end': {
              'line': 1,
              'column': 98
            }
          }
        },
        'hash': {
          'pairs': [],
          'type': 'Hash'
        },
        'params': [
          {
            'type': 'SubExpression',
            'path': {
              'type': 'PathExpression',
              'data': false,
              'depth': 0,
              'parts': [
                'ember-cli-named-block-slots-polyfill',
                'eq'
              ],
              'original': 'ember-cli-named-block-slots-polyfill/eq',
              'loc': {
                'start': {
                  'line': 1,
                  'column': 100
                },
                'end': {
                  'line': 1,
                  'column': 139
                }
              }
            },
            'hash': {
              'pairs': [],
              'type': 'Hash'
            },
            'params': [
              {
                'type': 'PathExpression',
                'data': false,
                'depth': 0,
                'parts': [
                  'slot'
                ],
                'original': 'slot',
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 140
                  },
                  'end': {
                    'line': 1,
                    'column': 144
                  }
                }
              },
              {
                'type': 'StringLiteral',
                'value': '|anonymous|',
                'original': '|anonymous|',
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 145
                  },
                  'end': {
                    'line': 1,
                    'column': 158
                  }
                }
              }
            ],
            'loc': {
              'start': {
                'line': 1,
                'column': 99
              },
              'end': {
                'line': 1,
                'column': 159
              }
            }
          }
        ],
        'program': {
          'type': 'Program',
          'blockParams': [],
          'body': [],
          'chained': false,
          'strip': {}
        },
        'inverse': null,
        'openStrip': {
          'open': false,
          'close': false
        },
        'inverseStrip': {
          'open': false,
          'close': false
        },
        'closeStrip': {
          'open': false,
          'close': false
        },
        'loc': {
          'start': {
            'line': 1,
            'column': 93
          },
          'end': {
            'line': 1,
            'column': 315
          }
        }
      }
    ],
    'chained': false
  },
  'inverse': null,
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 32
    }
  }
};

const blockWithSlotNameInPath = {
  'type': 'BlockStatement',
  'path': {
    'type': 'PathExpression',
    'data': false,
    'depth': 0,
    'parts': [
      'named-block'
    ],
    'original': 'named-block',
    'loc': {
      'start': {
        'line': 1,
        'column': 3
      },
      'end': {
        'line': 1,
        'column': 14
      }
    }
  },
  'slotName': 'block-a',
  'params': [

  ],
  'program': {
    'type': 'Program',
    'body': [

    ]
  },
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 32
    }
  }
};

const blockWithNamedSlots = {
  'type': 'BlockStatement',
  'path': {
    'type': 'PathExpression',
    'data': false,
    'depth': 0,
    'parts': [
      'named-block'
    ],
    'original': 'named-block',
    'loc': {
      'start': {
        'line': 1,
        'column': 3
      },
      'end': {
        'line': 1,
        'column': 14
      }
    }
  },
  'slotName': '|anonymous|',
  'params': [

  ],
  'program': {
    'type': 'Program',
    'body': [

    ]
  },
  'inverse': {
    'type': 'Program',
    'body': [
      {
        'type': 'NamedBlockSlotStatement',
        'path': {
          'type': 'PathExpression',
          'data': false,
          'depth': 0,
          'parts': [
            'block-a'
          ],
          'original': 'block-a',
          'loc': {
            'start': {
              'line': 1,
              'column': 20
            },
            'end': {
              'line': 1,
              'column': 27
            }
          }
        },
        'slotName': 'block-a',
        'params': [

        ],
        'hash': null,
        'program': {
          'type': 'Program',
          'body': [

          ]
        },
        'inverse': {
          'type': 'Program',
          'body': [
            {
              'type': 'NamedBlockSlotStatement',
              'path': {
                'type': 'PathExpression',
                'data': false,
                'depth': 0,
                'parts': [
                  'block-b'
                ],
                'original': 'block-b',
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 33
                  },
                  'end': {
                    'line': 1,
                    'column': 40
                  }
                }
              },
              'slotName': 'block-b',
              'params': [

              ],
              'hash': null,
              'program': {
                'type': 'Program',
                'body': [

                ]
              },
              'inverse': {
                'type': 'Program',
                'body': [
                  {
                    'type': 'NamedBlockSlotStatement',
                    'path': {
                      'type': 'PathExpression',
                      'data': false,
                      'depth': 0,
                      'parts': [
                        'block-c'
                      ],
                      'original': 'block-c',
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 46
                        },
                        'end': {
                          'line': 1,
                          'column': 53
                        }
                      }
                    },
                    'slotName': 'block-c',
                    'params': [

                    ],
                    'hash': null,
                    'program': {
                      'type': 'Program',
                      'body': [

                      ]
                    },
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 42
                      },
                      'end': {
                        'line': 1,
                        'column': 55
                      }
                    }
                  }
                ],
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 42
                  },
                  'end': {
                    'line': 1,
                    'column': 55
                  }
                },
                'chained': false
              },
              'loc': {
                'start': {
                  'line': 1,
                  'column': 29
                },
                'end': {
                  'line': 1,
                  'column': 55
                }
              }
            }
          ],
          'loc': {
            'start': {
              'line': 1,
              'column': 29
            },
            'end': {
              'line': 1,
              'column': 55
            }
          },
          'chained': true
        },
        'loc': {
          'start': {
            'line': 1,
            'column': 16
          },
          'end': {
            'line': 1,
            'column': 55
          }
        }
      }
    ],
    'loc': {
      'start': {
        'line': 1,
        'column': 16
      },
      'end': {
        'line': 1,
        'column': 55
      }
    },
    'chained': true
  },
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 71
    }
  }
};

const untransformedBlockWithSlots = {
  'type': 'Program',
  'body': [
    {
      'type': 'BlockStatement',
      'path': {
        'type': 'PathExpression',
        'data': false,
        'depth': 0,
        'parts': [
          'named-block'
        ],
        'original': 'named-block',
        'loc': {
          'start': {
            'line': 1,
            'column': 3
          },
          'end': {
            'line': 1,
            'column': 14
          }
        }
      },
      'slotName': '|anonymous|',
      'params': [

      ],
      'program': {
        'type': 'Program',
        'body': [

        ],
        'strip': {

        }
      },
      'inverse': {
        'type': 'Program',
        'body': [
          {
            'type': 'NamedBlockSlotStatement',
            'path': {
              'type': 'PathExpression',
              'data': false,
              'depth': 0,
              'parts': [
                'block-a'
              ],
              'original': 'block-a',
              'loc': {
                'start': {
                  'line': 1,
                  'column': 20
                },
                'end': {
                  'line': 1,
                  'column': 27
                }
              }
            },
            'slotName': 'block-a',
            'params': [

            ],
            'hash': null,
            'program': {
              'type': 'Program',
              'body': [

              ],
              'strip': {

              }
            },
            'inverse': {
              'type': 'Program',
              'body': [
                {
                  'type': 'NamedBlockSlotStatement',
                  'path': {
                    'type': 'PathExpression',
                    'data': false,
                    'depth': 0,
                    'parts': [
                      'block-b'
                    ],
                    'original': 'block-b',
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 33
                      },
                      'end': {
                        'line': 1,
                        'column': 40
                      }
                    }
                  },
                  'slotName': 'block-b',
                  'params': [

                  ],
                  'hash': null,
                  'program': {
                    'type': 'Program',
                    'body': [

                    ],
                    'strip': {

                    }
                  },
                  'openStrip': {
                    'open': false,
                    'close': false
                  },
                  'closeStrip': null,
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 29
                    },
                    'end': {
                      'line': 1,
                      'column': 42
                    }
                  }
                }
              ],
              'strip': {

              },
              'loc': {
                'start': {
                  'line': 1,
                  'column': 29
                },
                'end': {
                  'line': 1,
                  'column': 42
                }
              },
              'chained': false
            },
            'openStrip': {
              'open': false,
              'close': false
            },
            'inverseStrip': {
              'open': false,
              'close': false
            },
            'closeStrip': {
              'open': false,
              'close': false
            },
            'loc': {
              'start': {
                'line': 1,
                'column': 16
              },
              'end': {
                'line': 1,
                'column': 42
              }
            }
          }
        ],
        'strip': {

        },
        'loc': {
          'start': {
            'line': 1,
            'column': 16
          },
          'end': {
            'line': 1,
            'column': 42
          }
        },
        'chained': true
      },
      'openStrip': {
        'open': false,
        'close': false
      },
      'inverseStrip': {
        'open': false,
        'close': false
      },
      'closeStrip': {
        'open': false,
        'close': false
      },
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 58
        }
      }
    }
  ],
  'chained': false,
  'strip': {},
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 58
    }
  }
};

const transformedBlockWithSlots = {
  'type': 'Program',
  'body': [
    {
      'type': 'BlockStatement',
      'path': {
        'type': 'PathExpression',
        'data': false,
        'depth': 0,
        'parts': [
          'named-block'
        ],
        'original': 'named-block',
        'loc': {
          'start': {
            'line': 1,
            'column': 3
          },
          'end': {
            'line': 1,
            'column': 14
          }
        }
      },
      'inverse': {},
      'params': [],
      'hash': {
        'type': 'Hash',
        'pairs': [
          {
            'type': 'HashPair',
            'key': 'hasBlock::',
            'value': {
              'type': 'BooleanLiteral',
              'value': true,
              'original': true,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 26
                },
                'end': {
                  'line': 1,
                  'column': 30
                }
              }
            },
            'loc': {
              'start': {
                'line': 1,
                'column': 15
              },
              'end': {
                'line': 1,
                'column': 30
              }
            }
          },
          {
            'type': 'HashPair',
            'key': 'hasBlock::blockA',
            'value': {
              'type': 'BooleanLiteral',
              'value': true,
              'original': true,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 48
                },
                'end': {
                  'line': 1,
                  'column': 52
                }
              }
            },
            'loc': {
              'start': {
                'line': 1,
                'column': 31
              },
              'end': {
                'line': 1,
                'column': 52
              }
            }
          },
          {
            'type': 'HashPair',
            'key': 'hasBlock::blockB',
            'value': {
              'type': 'BooleanLiteral',
              'value': true,
              'original': true,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 70
                },
                'end': {
                  'line': 1,
                  'column': 74
                }
              }
            },
            'loc': {
              'start': {
                'line': 1,
                'column': 53
              },
              'end': {
                'line': 1,
                'column': 74
              }
            }
          }
        ],
        'loc': {
          'start': {
            'line': 1,
            'column': 15
          },
          'end': {
            'line': 1,
            'column': 74
          }
        }
      },
      'program': {
        'type': 'Program',
        'body': [
          {
            'type': 'BlockStatement',
            'path': {
              'type': 'PathExpression',
              'data': false,
              'depth': 0,
              'parts': [
                'if'
              ],
              'original': 'if',
              'loc': {
                'start': {
                  'line': 1,
                  'column': 96
                },
                'end': {
                  'line': 1,
                  'column': 98
                }
              }
            },
            'hash': {
              'pairs': [],
              'type': 'Hash'
            },
            'params': [
              {
                'type': 'SubExpression',
                'path': {
                  'type': 'PathExpression',
                  'data': false,
                  'depth': 0,
                  'parts': [
                    'ember-cli-named-block-slots-polyfill',
                    'eq'
                  ],
                  'original': 'ember-cli-named-block-slots-polyfill/eq',
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 100
                    },
                    'end': {
                      'line': 1,
                      'column': 139
                    }
                  }
                },
                'hash': {
                  'pairs': [],
                  'type': 'Hash'
                },
                'params': [
                  {
                    'type': 'PathExpression',
                    'data': false,
                    'depth': 0,
                    'parts': [
                      'slot'
                    ],
                    'original': 'slot',
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 140
                      },
                      'end': {
                        'line': 1,
                        'column': 144
                      }
                    }
                  },
                  {
                    'type': 'StringLiteral',
                    'value': '|anonymous|',
                    'original': '|anonymous|',
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 145
                      },
                      'end': {
                        'line': 1,
                        'column': 158
                      }
                    }
                  }
                ],
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 99
                  },
                  'end': {
                    'line': 1,
                    'column': 159
                  }
                }
              }
            ],
            'program': {
              'type': 'Program',
              'blockParams': [],
              'body': [],
              'chained': false,
              'strip': {}
            },
            'inverse': {
              'type': 'Program',
              'blockParams': [],
              'body': [
                {
                  'type': 'BlockStatement',
                  'path': {
                    'type': 'PathExpression',
                    'data': false,
                    'depth': 0,
                    'parts': [
                      'if'
                    ],
                    'original': 'if',
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 168
                      },
                      'end': {
                        'line': 1,
                        'column': 170
                      }
                    }
                  },
                  'hash': {
                    'pairs': [],
                    'type': 'Hash'
                  },
                  'params': [
                    {
                      'type': 'SubExpression',
                      'path': {
                        'type': 'PathExpression',
                        'data': false,
                        'depth': 0,
                        'parts': [
                          'ember-cli-named-block-slots-polyfill',
                          'eq'
                        ],
                        'original': 'ember-cli-named-block-slots-polyfill/eq',
                        'loc': {
                          'start': {
                            'line': 1,
                            'column': 172
                          },
                          'end': {
                            'line': 1,
                            'column': 211
                          }
                        }
                      },
                      'hash': {
                        'pairs': [],
                        'type': 'Hash'
                      },
                      'params': [
                        {
                          'type': 'PathExpression',
                          'data': false,
                          'depth': 0,
                          'parts': [
                            'slot'
                          ],
                          'original': 'slot',
                          'loc': {
                            'start': {
                              'line': 1,
                              'column': 212
                            },
                            'end': {
                              'line': 1,
                              'column': 216
                            }
                          }
                        },
                        {
                          'type': 'StringLiteral',
                          'value': 'block-a',
                          'original': 'block-a',
                          'loc': {
                            'start': {
                              'line': 1,
                              'column': 217
                            },
                            'end': {
                              'line': 1,
                              'column': 226
                            }
                          }
                        }
                      ],
                      'loc': {
                        'start': {
                          'line': 1,
                          'column': 171
                        },
                        'end': {
                          'line': 1,
                          'column': 227
                        }
                      }
                    }
                  ],
                  'program': {
                    'type': 'Program',
                    'blockParams': [],
                    'body': [

                    ],
                    'chained': false,
                    'strip': {}
                  },
                  'inverse': {
                    'type': 'Program',
                    'blockParams': [],
                    'body': [
                      {
                        'type': 'BlockStatement',
                        'path': {
                          'type': 'PathExpression',
                          'data': false,
                          'depth': 0,
                          'parts': [
                            'if'
                          ],
                          'original': 'if',
                          'loc': {
                            'start': {
                              'line': 1,
                              'column': 240
                            },
                            'end': {
                              'line': 1,
                              'column': 242
                            }
                          }
                        },
                        'params': [
                          {
                            'type': 'SubExpression',
                            'path': {
                              'type': 'PathExpression',
                              'data': false,
                              'depth': 0,
                              'parts': [
                                'ember-cli-named-block-slots-polyfill',
                                'eq'
                              ],
                              'original': 'ember-cli-named-block-slots-polyfill/eq',
                              'loc': {
                                'start': {
                                  'line': 1,
                                  'column': 244
                                },
                                'end': {
                                  'line': 1,
                                  'column': 283
                                }
                              }
                            },
                            'hash': {
                              'pairs': [],
                              'type': 'Hash'
                            },
                            'params': [
                              {
                                'type': 'PathExpression',
                                'data': false,
                                'depth': 0,
                                'parts': [
                                  'slot'
                                ],
                                'original': 'slot',
                                'loc': {
                                  'start': {
                                    'line': 1,
                                    'column': 284
                                  },
                                  'end': {
                                    'line': 1,
                                    'column': 288
                                  }
                                }
                              },
                              {
                                'type': 'StringLiteral',
                                'value': 'block-b',
                                'original': 'block-b',
                                'loc': {
                                  'start': {
                                    'line': 1,
                                    'column': 289
                                  },
                                  'end': {
                                    'line': 1,
                                    'column': 298
                                  }
                                }
                              }
                            ],
                            'loc': {
                              'start': {
                                'line': 1,
                                'column': 243
                              },
                              'end': {
                                'line': 1,
                                'column': 299
                              }
                            }
                          }
                        ],
                        'hash': {
                          'pairs': [],
                          'type': 'Hash'
                        },
                        'program': {
                          'type': 'Program',
                          'blockParams': [],
                          'body': [],
                          'chained': false,
                          'strip': {}
                        },
                        'inverse': {},
                        'openStrip': {
                          'open': false,
                          'close': false
                        },
                        'closeStrip': {
                          'open': false,
                          'close': false
                        },
                        'loc': {
                          'start': {
                            'line': 1,
                            'column': 237
                          },
                          'end': {
                            'line': 1,
                            'column': 308
                          }
                        }
                      }
                    ],
                    'chained': false,
                    'strip': {},
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 237
                      },
                      'end': {
                        'line': 1,
                        'column': 308
                      }
                    }
                  },
                  'openStrip': {
                    'open': false,
                    'close': false
                  },
                  'inverseStrip': {
                    'open': false,
                    'close': false
                  },
                  'closeStrip': {
                    'open': false,
                    'close': false
                  },
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 161
                    },
                    'end': {
                      'line': 1,
                      'column': 308
                    }
                  }
                }
              ],
              'strip': {},
              'loc': {
                'start': {
                  'line': 1,
                  'column': 161
                },
                'end': {
                  'line': 1,
                  'column': 308
                }
              },
              'chained': true
            },
            'openStrip': {
              'open': false,
              'close': false
            },
            'inverseStrip': {
              'open': false,
              'close': false
            },
            'closeStrip': {
              'open': false,
              'close': false
            },
            'loc': {
              'start': {
                'line': 1,
                'column': 93
              },
              'end': {
                'line': 1,
                'column': 315
              }
            }
          }
        ],
        'chained': false,
        'strip': {},
        'loc': {
          'start': {
            'line': 1,
            'column': 93
          },
          'end': {
            'line': 1,
            'column': 315
          }
        },
        'blockParams': [
          'slot',
          'params'
        ]
      },
      'openStrip': {
        'open': false,
        'close': false
      },
      'closeStrip': {
        'open': false,
        'close': false
      },
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 331
        }
      }
    }
  ],
  'chained': false,
  'strip': {},
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 331
    }
  }
};

const untransformedBlockWithSlotPath = {
  'type': 'Program',
  'body': [
    {
      'type': 'BlockStatement',
      'path': {
        'type': 'PathExpression',
        'data': false,
        'depth': 0,
        'parts': [
          'named-block'
        ],
        'original': 'named-block',
        'loc': {
          'start': {
            'line': 1,
            'column': 3
          },
          'end': {
            'line': 1,
            'column': 23
          }
        }
      },
      'slotName': 'block-a',
      'params': [

      ],
      'program': {
        'type': 'Program',
        'body': [

        ],
        'strip': {

        }
      },
      'openStrip': {
        'open': false,
        'close': false
      },
      'closeStrip': {
        'open': false,
        'close': false
      },
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 41
        }
      }
    }
  ],
  'chained': false,
  'strip': {

  },
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 41
    }
  }
};

const transformedBlockWithSlotPath = {
  'type': 'Program',
  'body': [
    {
      'type': 'BlockStatement',
      'path': {
        'type': 'PathExpression',
        'data': false,
        'depth': 0,
        'parts': [
          'named-block'
        ],
        'original': 'named-block',
        'loc': {
          'start': {
            'line': 1,
            'column': 3
          },
          'end': {
            'line': 1,
            'column': 14
          }
        }
      },
      'params': [

      ],
      'hash': {
        'type': 'Hash',
        'pairs': [
          {
            'type': 'HashPair',
            'key': 'hasBlock::blockA',
            'value': {
              'type': 'BooleanLiteral',
              'value': true,
              'original': true,
              'loc': {
                'start': {
                  'line': 1,
                  'column': 32
                },
                'end': {
                  'line': 1,
                  'column': 36
                }
              }
            },
            'loc': {
              'start': {
                'line': 1,
                'column': 15
              },
              'end': {
                'line': 1,
                'column': 36
              }
            }
          }
        ],
        'loc': {
          'start': {
            'line': 1,
            'column': 15
          },
          'end': {
            'line': 1,
            'column': 36
          }
        }
      },
      'program': {
        'type': 'Program',
        'body': [
          {
            'type': 'BlockStatement',
            'path': {
              'type': 'PathExpression',
              'data': false,
              'depth': 0,
              'parts': [
                'if'
              ],
              'original': 'if',
              'loc': {
                'start': {
                  'line': 1,
                  'column': 58
                },
                'end': {
                  'line': 1,
                  'column': 60
                }
              }
            },
            'hash': {
              'type': 'Hash',
              'pairs': []
            },
            'params': [
              {
                'type': 'SubExpression',
                'path': {
                  'type': 'PathExpression',
                  'data': false,
                  'depth': 0,
                  'parts': [
                    'ember-cli-named-block-slots-polyfill',
                    'eq'
                  ],
                  'original': 'ember-cli-named-block-slots-polyfill/eq',
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 62
                    },
                    'end': {
                      'line': 1,
                      'column': 102
                    }
                  }
                },
                'hash': {
                  'type': 'Hash',
                  'pairs': []
                },
                'params': [
                  {
                    'type': 'PathExpression',
                    'data': false,
                    'depth': 0,
                    'parts': [
                      'slot'
                    ],
                    'original': 'slot',
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 103
                      },
                      'end': {
                        'line': 1,
                        'column': 107
                      }
                    }
                  },
                  {
                    'original': 'block-a',
                    'type': 'StringLiteral',
                    'value': 'block-a'
                  }
                ],
                'loc': {
                  'start': {
                    'line': 1,
                    'column': 61
                  },
                  'end': {
                    'line': 1,
                    'column': 108
                  }
                }
              }
            ],
            'program': {
              'type': 'Program',
              'blockParams': [],
              'body': [

              ],
              'chained': false,
              'strip': {

              }
            },
            'inverse': {},
            'openStrip': {
              'open': false,
              'close': false
            },
            'closeStrip': {
              'open': false,
              'close': false
            },
            'loc': {
              'start': {
                'line': 1,
                'column': 55
              },
              'end': {
                'line': 1,
                'column': 117
              }
            }
          }
        ],
        'chained': false,
        'strip': {

        },
        'loc': {
          'start': {
            'line': 1,
            'column': 55
          },
          'end': {
            'line': 1,
            'column': 117
          }
        },
        'blockParams': [
          'slot',
          'params'
        ]
      },
      'inverse': {},
      'openStrip': {
        'open': false,
        'close': false
      },
      'closeStrip': {
        'open': false,
        'close': false
      },
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 133
        }
      }
    }
  ],
  'chained': false,
  'strip': {

  },
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 133
    }
  }
};

const programNoNamedYields = {
  'type': 'Program',
  'body': [
    {
      'type': 'ContentStatement',
      'original': '<div id=\'hello\'>',
      'value': '<div id=\'hello\'>',
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 16
        }
      }
    },
    {
      'type': 'MustacheStatement',
      'path': {
        'type': 'PathExpression',
        'data': false,
        'depth': 0,
        'parts': [
          'yield'
        ],
        'original': 'yield',
        'loc': {
          'start': {
            'line': 1,
            'column': 18
          },
          'end': {
            'line': 1,
            'column': 23
          }
        }
      },
      'params': [
        {
          'type': 'StringLiteral',
          'value': 'Hello',
          'original': 'Hello',
          'loc': {
            'start': {
              'line': 1,
              'column': 24
            },
            'end': {
              'line': 1,
              'column': 31
            }
          }
        }
      ],
      'escaped': true,
      'strip': {
        'open': false,
        'close': false
      },
      'loc': {
        'start': {
          'line': 1,
          'column': 16
        },
        'end': {
          'line': 1,
          'column': 33
        }
      }
    },
    {
      'type': 'ContentStatement',
      'original': '<\/div>',
      'value': '<\/div>',
      'loc': {
        'start': {
          'line': 1,
          'column': 33
        },
        'end': {
          'line': 1,
          'column': 39
        }
      }
    }
  ],
  'strip': {

  },
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 39
    }
  }
};

const untransformedProgramWithHasBlock = {
  'type': 'Program',
  'body': [
    {
      'type': 'ContentStatement',
      'original': '<div id=\'hello\'>',
      'value': '<div id=\'hello\'>',
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 16
        }
      }
    },
    {
      'type': 'BlockStatement',
      'path': {
        'type': 'PathExpression',
        'data': false,
        'depth': 0,
        'parts': [
          'if'
        ],
        'original': 'if',
        'loc': {
          'start': {
            'line': 1,
            'column': 19
          },
          'end': {
            'line': 1,
            'column': 21
          }
        }
      },
      'slotName': '',
      'params': [
        {
          'type': 'PathExpression',
          'data': false,
          'depth': 0,
          'parts': [
            'hasBlock'
          ],
          'original': 'hasBlock',
          'loc': {
            'start': {
              'line': 1,
              'column': 22
            },
            'end': {
              'line': 1,
              'column': 30
            }
          }
        }
      ],
      'program': {
        'type': 'Program',
        'body': [
          {
            'type': 'ContentStatement',
            'original': 'Has block',
            'value': 'Has block',
            'loc': {
              'start': {
                'line': 1,
                'column': 32
              },
              'end': {
                'line': 1,
                'column': 41
              }
            }
          }
        ],
        'strip': {

        },
        'loc': {
          'start': {
            'line': 1,
            'column': 32
          },
          'end': {
            'line': 1,
            'column': 41
          }
        }
      },
      'openStrip': {
        'open': false,
        'close': false
      },
      'closeStrip': {
        'open': false,
        'close': false
      },
      'loc': {
        'start': {
          'line': 1,
          'column': 16
        },
        'end': {
          'line': 1,
          'column': 48
        }
      }
    },
    {
      'type': 'ContentStatement',
      'original': '<\/div>',
      'value': '<\/div>',
      'loc': {
        'start': {
          'line': 1,
          'column': 48
        },
        'end': {
          'line': 1,
          'column': 54
        }
      }
    }
  ],
  'strip': {

  },
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 54
    }
  }
};

const transformedProgramWithHasBlock = {
  'type': 'Program',
  'body': [
    {
      'type': 'ContentStatement',
      'original': '<div id=\'hello\'>',
      'value': '<div id=\'hello\'>',
      'loc': {
        'start': {
          'line': 1,
          'column': 0
        },
        'end': {
          'line': 1,
          'column': 16
        }
      }
    },
    {
      'type': 'BlockStatement',
      'path': {
        'type': 'PathExpression',
        'data': false,
        'depth': 0,
        'parts': [
          'if'
        ],
        'original': 'if',
        'loc': {
          'start': {
            'line': 1,
            'column': 19
          },
          'end': {
            'line': 1,
            'column': 21
          }
        }
      },
      'slotName': '',
      'params': [
        {
          'type': 'PathExpression',
          'data': false,
          'depth': 0,
          'parts': [
            'hasBlock::'
          ],
          'original': 'hasBlock::',
          'loc': {
            'start': {
              'line': 1,
              'column': 22
            },
            'end': {
              'line': 1,
              'column': 32
            }
          }
        }
      ],
      'program': {
        'type': 'Program',
        'body': [
          {
            'type': 'ContentStatement',
            'original': 'Has block',
            'value': 'Has block',
            'loc': {
              'start': {
                'line': 1,
                'column': 34
              },
              'end': {
                'line': 1,
                'column': 43
              }
            }
          }
        ],
        'strip': {

        },
        'loc': {
          'start': {
            'line': 1,
            'column': 34
          },
          'end': {
            'line': 1,
            'column': 43
          }
        }
      },
      'openStrip': {
        'open': false,
        'close': false
      },
      'closeStrip': {
        'open': false,
        'close': false
      },
      'loc': {
        'start': {
          'line': 1,
          'column': 16
        },
        'end': {
          'line': 1,
          'column': 50
        }
      }
    },
    {
      'type': 'ContentStatement',
      'original': '<\/div>',
      'value': '<\/div>',
      'loc': {
        'start': {
          'line': 1,
          'column': 50
        },
        'end': {
          'line': 1,
          'column': 56
        }
      }
    }
  ],
  'strip': {

  },
  'loc': {
    'start': {
      'line': 1,
      'column': 0
    },
    'end': {
      'line': 1,
      'column': 56
    }
  }
};

const sampleLoc = {
  'start': {
    'line': 1,
    'column': 0
  },
  'end': {
    'line': 1,
    'column': 32
  }
};

function generateUntransformedProgamWithSlotYield(slotName) {
  const yieldPath = slotName === '|anonymous|' ? 'yield' : 'yield::' + slotName;
  return {
    'type': 'Program',
    'body': [
      {
        'type': 'ContentStatement',
        'original': '<div id=\'hello\'>',
        'value': '<div id=\'hello\'>',
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 1,
            'column': 16
          }
        }
      },
      {
        'type': 'MustacheStatement',
        'path': {
          'type': 'PathExpression',
          'data': false,
          'depth': 0,
          'parts': [
            yieldPath
          ],
          'original': yieldPath,
          'loc': {
            'start': {
              'line': 1,
              'column': 18
            },
            'end': {
              'line': 1,
              'column': 30
            }
          }
        },
        'params': [
          {
            'type': 'StringLiteral',
            'value': 'Hello',
            'original': 'Hello',
            'loc': {
              'start': {
                'line': 1,
                'column': 31
              },
              'end': {
                'line': 1,
                'column': 38
              }
            }
          }
        ],
        'escaped': true,
        'strip': {
          'open': false,
          'close': false
        },
        'loc': {
          'start': {
            'line': 1,
            'column': 16
          },
          'end': {
            'line': 1,
            'column': 40
          }
        }
      },
      {
        'type': 'ContentStatement',
        'original': '<\/div>',
        'value': '<\/div>',
        'loc': {
          'start': {
            'line': 1,
            'column': 40
          },
          'end': {
            'line': 1,
            'column': 46
          }
        }
      }
    ],
    'strip': {

    },
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 1,
        'column': 46
      }
    }
  };
}

function generateTransformedProgamWithSlotYield(slotName) {
  return {
    'type': 'Program',
    'body': [
      {
        'type': 'ContentStatement',
        'original': '<div id=\'hello\'>',
        'value': '<div id=\'hello\'>',
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 1,
            'column': 16
          }
        }
      },
      {
        'type': 'MustacheStatement',
        'path': {
          'type': 'PathExpression',
          'data': false,
          'depth': 0,
          'parts': [
            'yield'
          ],
          'original': 'yield',
          'loc': {
            'start': {
              'line': 1,
              'column': 18
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        'hash': {
          'type': 'Hash',
          'pairs': []
        },
        'params': [
          {
            'type': 'StringLiteral',
            'value': slotName,
            'original': slotName,
            'loc': {
              'start': {
                'line': 1,
                'column': 24
              },
              'end': {
                'line': 1,
                'column': 31
              }
            }
          },
          {
            'type': 'SubExpression',
            'path': {
              'type': 'PathExpression',
              'data': false,
              'depth': 0,
              'parts': [
                'hash'
              ],
              'original': 'hash',
              'loc': {
                'start': {
                  'line': 1,
                  'column': 33
                },
                'end': {
                  'line': 1,
                  'column': 37
                }
              }
            },
            'params': [

            ],
            'hash': {
              'type': 'Hash',
              'pairs': [
                {
                  'type': 'HashPair',
                  'key': '0',
                  'value': {
                    'type': 'StringLiteral',
                    'value': 'Hello',
                    'original': 'Hello',
                    'loc': {
                      'start': {
                        'line': 1,
                        'column': 40
                      },
                      'end': {
                        'line': 1,
                        'column': 47
                      }
                    }
                  },
                  'loc': {
                    'start': {
                      'line': 1,
                      'column': 38
                    },
                    'end': {
                      'line': 1,
                      'column': 47
                    }
                  }
                }
              ],
              'loc': {
                'start': {
                  'line': 1,
                  'column': 38
                },
                'end': {
                  'line': 1,
                  'column': 47
                }
              }
            },
            'loc': {
              'start': {
                'line': 1,
                'column': 32
              },
              'end': {
                'line': 1,
                'column': 48
              }
            }
          }
        ],
        'escaped': true,
        'strip': {
          'open': false,
          'close': false
        },
        'loc': {
          'start': {
            'line': 1,
            'column': 16
          },
          'end': {
            'line': 1,
            'column': 50
          }
        }
      },
      {
        'type': 'ContentStatement',
        'original': '<\/div>',
        'value': '<\/div>',
        'loc': {
          'start': {
            'line': 1,
            'column': 50
          },
          'end': {
            'line': 1,
            'column': 56
          }
        }
      }
    ],
    'strip': {

    },
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 1,
        'column': 56
      }
    }
  };
}

function generateSlotChain(slotNames) {
  if (slotNames.length > 0) {
    const slotName = slotNames.shift();
    return {
      'type': 'Program',
      'body': [
        {
          'type': 'NamedBlockSlotStatement',
          'path': {
            'type': 'PathExpression',
            'data': false,
            'depth': 0,
            'parts': [
              slotName
            ],
            'original': slotName,
            'loc': {
              'start': {
                'line': 1,
                'column': 46
              },
              'end': {
                'line': 1,
                'column': 53
              }
            }
          },
          'slotName': slotName,
          'params': [

          ],
          'hash': null,
          'program': {
            'type': 'Program',
            'body': [

            ]
          },
          'inverse': generateSlotChain(slotNames),
          'loc': {
            'start': {
              'line': 1,
              'column': 42
            },
            'end': {
              'line': 1,
              'column': 55
            }
          }
        }
      ],
      'loc': {
        'start': {
          'line': 1,
          'column': 42
        },
        'end': {
          'line': 1,
          'column': 55
        }
      },
      'chained': !!(slotNames.length > 0)
    };
  }

  return;
}

function generateBlockWithSlotChain(slotNames) {
  const cloneSlotNames = slotNames.slice(0);
  return {
    'type': 'BlockStatement',
    'path': {
      'type': 'PathExpression',
      'data': false,
      'depth': 0,
      'parts': [
        'named-block'
      ],
      'original': 'named-block',
      'loc': {
        'start': {
          'line': 1,
          'column': 3
        },
        'end': {
          'line': 1,
          'column': 14
        }
      }
    },
    'slotName': '|anonymous|',
    'params': [

    ],
    'program': {
      'type': 'Program',
      'body': [

      ]
    },
    'inverse': generateSlotChain(cloneSlotNames),
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 1,
        'column': 32
      }
    }
  };
}

function generateBlockWithSlotPathAndSlotChain(slotNames) {
  const first = slotNames[0];
  const rest = slotNames.slice(1);
  return {
    'type': 'BlockStatement',
    'path': {
      'type': 'PathExpression',
      'data': false,
      'depth': 0,
      'parts': [
        'named-block'
      ],
      'original': 'named-block',
      'loc': {
        'start': {
          'line': 1,
          'column': 3
        },
        'end': {
          'line': 1,
          'column': 14
        }
      }
    },
    'slotName': first,
    'params': [

    ],
    'program': {
      'type': 'Program',
      'body': [

      ]
    },
    'inverse': generateSlotChain(rest),
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 1,
        'column': 32
      }
    }
  };
}

function mustacheWithPath(path) {
  return {
    'type': 'MustacheStatement',
    'path': {
      'type': 'PathExpression',
      'data': false,
      'depth': 0,
      'parts': path.replace(/this\.|\.\.\/|\.\//g, '').split(/[.\/]/g),
      'original': path,
      'loc': {
        'source': null,
        'start': {
          'line': 1,
          'column': 18
        },
        'end': {
          'line': 1,
          'column': 28
        }
      }
    },
    'params': [

    ],
    'hash': undefined,
    'escaped': true,
    'strip': {
      'open': false,
      'close': false
    },
    'loc': {
      'start': {
        'line': 1,
        'column': 16
      },
      'end': {
        'line': 1,
        'column': 30
      }
    }
  };
}

function ignoreProps(props, ast) {
  const res = {};
  for (var property in ast) {
    if (props.indexOf(property) < 0) {
      const value = ast[property];
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          res[property] = value.map(function(element) {
            if (typeof element === 'object') {
              return ignoreProps(props, element);
            }

            return element;
          });
        } else {
          res[property] = ignoreProps(props, value);
        }
      } else {
        res[property] = value;
      }
    }
  }
  return res;
}

module.exports = {
  blockWithSlotNameInPath: blockWithSlotNameInPath,
  blockWithNoNamedSlots: blockWithNoNamedSlots,
  transformedBlockWithNoNamedSlots: transformedBlockWithNoNamedSlots,
  blockWithNamedSlots: blockWithNamedSlots,
  generateBlockWithSlotChain: generateBlockWithSlotChain,
  generateBlockWithSlotPathAndSlotChain: generateBlockWithSlotPathAndSlotChain,
  sampleLoc: sampleLoc,
  mustacheWithPath: mustacheWithPath,
  ignoreProps: ignoreProps,
  untransformedBlockWithSlots: untransformedBlockWithSlots,
  transformedBlockWithSlots: transformedBlockWithSlots,
  untransformedBlockWithSlotPath: untransformedBlockWithSlotPath,
  transformedBlockWithSlotPath: transformedBlockWithSlotPath,
  programNoNamedYields: programNoNamedYields,
  untransformedProgramWithNamedYield: generateUntransformedProgamWithSlotYield('hello'),
  transformedProgramWithNamedYield: generateTransformedProgamWithSlotYield('hello'),
  untransformedProgramWithAnonymousYield: generateUntransformedProgamWithSlotYield('|anonymous|'),
  transformedProgamWithAnonymousYield: generateTransformedProgamWithSlotYield('|anonymous|'),
  untransformedProgramWithHasBlock: untransformedProgramWithHasBlock,
  transformedProgramWithHasBlock: transformedProgramWithHasBlock
};
