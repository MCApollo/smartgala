/**
 * constantStrapi
 */
const constantStrapi = {
  /**
   * CMS Endpoints
   */
  endpoints: {
    auctions: "/auctions",
  },

  /**
   * Components
   */
  components: {
    event: "Event",
    items: "Item",
    time: "Time",
    photo: "Photo",

    /**
     * Wildcard to populate everything
     */
    wildcard: "*",
  },
};

export default constantStrapi;
