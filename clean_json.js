// const fs = require('fs');

// // Read the JSON file
// fs.readFile('./data.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading JSON file:', err);
//         return;
//     }

//     try {
//         // Parse the JSON data
//         const jsonData = JSON.parse(data);

//         // Initialize an empty array to store cleaned data
//         const cleanedData = [];

//         // Iterate over each object in the array
//         for (i = 0; i < 650; i++) {
//         jsonData.map(obj => {
//             // Get the key (e.g., "E14000530")
//             const key = Object.keys(obj)[i];
//             // Push the inner object without the outer key into cleanedData
//             cleanedData.push(obj[key]);
//         })};

//         // Convert the cleanedData array to JSON format
//         const cleanedJson = JSON.stringify(cleanedData, null, 2);

//         // Write the modified JSON data back to the file
//         fs.writeFile('cleaned_data.json2', cleanedJson, 'utf8', (err) => {
//             if (err) {
//                 console.error('Error writing cleaned JSON file:', err);
//                 return;
//             }
//             console.log('JSON file has been cleaned and saved successfully.');
//         });
//     } catch (error) {
//         console.error('Error parsing JSON data:', error);
//     }
// });
