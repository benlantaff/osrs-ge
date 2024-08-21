/**
 * Old school runescape (osrs) grand exchange api
 */

/**
 * Get all items based on the item letter(s).
 * This is useful when you want to autocomplete items based on the characters in the beginning of a word.
 * @param {*} letter
 * @returns json
 */
const getItems = async (letter) => {
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(
      `https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=${letter}&page=1`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Grand Exchange data:", error);
  }
};

/**
 * This will return an item, based on the id given.
 * @param {*} itemId 
 * @returns json
 */
const getItem = async (itemId) => {
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(
      `https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Grand Exchange data:", error);
  }
};

/**
 * Returns graph data for daily and average prices, based on the item id.
 * @param {*} itemId 
 * @returns json
 */
const getGraphData = async (itemId) => {
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(
      `https://services.runescape.com/m=itemdb_oldschool/api/graph/${itemId}.json`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Grand Exchange data:", error);
  }
};

/**
 * Get the runedate for the last time the grand exchange was updated.
 * @returns json
 */
const getLastUpdatedDate = async () => {
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(
      `https://secure.runescape.com/m=itemdb_oldschool/api/info.json`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Grand Exchange data:", error);
  }
};

module.exports = {getItems, getItem, getGraphData, getLastUpdatedDate };