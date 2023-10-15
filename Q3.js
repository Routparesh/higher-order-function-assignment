// Define the list of items with their prices in US Dollars
const itemsInUSD = [
    { name: 'Item 1', price: 10.99 },
    { name: 'Item 2', price: 25.49 },
    { name: 'Item 3', price: 5.99 },
    { name: 'Item 4', price: 12.99 },
    { name: 'Item 5', price: 8.49 }
  ];
  
  // Define the exchange rate (1 USD to 80 INR)
  const exchangeRate = 80;
  
  // Use the map function to convert prices to Indian Rupees
  const itemsInINR = itemsInUSD.map(item => ({
    name: item.name,
    priceInUSD: item.price,
    priceInINR: item.price * exchangeRate
  }));
  
  // Display the items with prices in both USD and INR
  console.log("Items with Prices in USD and INR:");
  itemsInINR.forEach(item => {
    console.log(`${item.name}: $${item.priceInUSD.toFixed(2)} USD => ₹${item.priceInINR.toFixed(2)} INR`);
  });
  

