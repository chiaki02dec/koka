class Koka {
  constructor() {}

  getInfo() {
    return {
      id: 'Koka',
      name: 'Koka',
      blocks: [
        {
          opcode: 'power',
          blockType: Scratch.BlockType.REPORTER,
          text: '[X]の[N]乗',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            },
            N: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue '3'
            }
          }
        }
      ]
    }
  }

  power(args) {
    return Math.pow(args.X, args.N);
  }
}

Scratch.extensions.register(new Koka());
