const { prisma } = require('../../generated/prisma-client');

const Query = {
  async children(parent, args, ctx, info) {
    const children = await ctx.prisma.children({}, info);

    return children;
  }
};

module.exports = Query;
