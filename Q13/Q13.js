function countCategories(categories) {
  return categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
}

function countAndSortCategories(categories) {
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  const sortedCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
  
  return sortedCategories;
}

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log("Category Counts:", countCategories(categories));
console.log("Sorted Categories by Count:", countAndSortCategories(categories));