const { prisma } = require('../../generated/prisma-client');

const mutations = {
  async createSignInOut(parent, args, ctx, info) {
    console.log(args);

    const signInOut = await ctx.prisma.createSignInOut(
      {
        ...args,
        child: {
          connect: {
            id: args.child
          }
        }
      },
      info
    );

    return signInOut;
  },

  async updateSignInOut(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;

    const signInOutUpdate = await ctx.prisma.updateSignInOut(
      {
        data: {
          ...updates
        },
        where: {
          id: args.id
        }
      },
      info
    );

    return signInOutUpdate;
  },

  async createChild(parent, args, ctx, info) {
    const newChild = ctx.prisma.createChild(
      {
        ...args
      },
      info
    );

    return newChild;
  }
};

module.exports = mutations;
