module.exports = {
  /**
   * Retrieve role count.
   * @return {Number}
   */

  async roleCount(ctx) {
    console.log("sisas");
    if (ctx.query._q) {
      return await strapi
        .query("role", "users-permissions")
        .countSearch(ctx.query);
    }
    return await strapi.query("role", "users-permissions").count(ctx.query);
  },
};
