class koka {
  constructor() {}
  
  getinfo() {
    return {
      id: 'koka',
      name: 'koka',
      blocks: [
          {
          opcode: 'power',
          blocktype: Scratch.BlockType.REPORTER,
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

Scratch.extensions.register(new koka());