const { prisma } = require('../../generated/prisma-client');

const SignInOut = {
  child(parent, args, ctx, info) {
    return ctx.prisma
      .signInOut({
        id: parent.id
      })
      .child();
  }
};

module.exports = SignInOut;
