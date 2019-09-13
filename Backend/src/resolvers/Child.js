const { prisma } = require('../../generated/prisma-client');

const Child = {
  signInOuts(parent, args, ctx, info) {
    return ctx.prisma
      .child({
        id: parent.id
      })
      .signInOuts();
  }
};

module.exports = Child;
