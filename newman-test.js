const newman=require("newman")
const assert=require("assert")
const fs = require('fs')






try {

    // test('validates JSON response', async () => {
       
    //     // Run Newman command to get JSON response
    //     const csvData = fs.readFileSync(env, 'utf8');
    //     const { stdout } = await newman.run({
    //         collection: col,
    //         environment: csvData,
    //         iterationData: csvData,
    //         reporters: 'json'
    //     });

    //     // Parse JSON response
    //     const jsonResponse = JSON.parse(stdout);

    //     console.log(jsonResponse+"le data ")

    //     // Perform assertion on the JSON response
    //     assert.deepEqual(jsonResponse.run.stats.tests, jsonResponse.run.stats.passes);
    // });
    
describe('Newman JSON validation', () => {
    it('validates JSON response', async () => {
        // Read CSV file
         const csvData = fs.readFileSync('./data.csv', 'utf8');
        
        // Run Newman command to get JSON response
        const { stdout } = await newman.run({
            collection: "./qrcode_data.json",
            environment:'./Test_Environment.postman_environment.json' ,
            iterationData: csvData,
            reporters: 'json',
        });

        // Parse JSON response
        const jsonResponse = JSON.parse(stdout);

        console.log(jsonResponse)

        // Perform assertion on the JSON response
        assert.deepEqual(jsonResponse.run.stats.tests);
    });
});

            
} catch (error) {

    console.log(error.message)


    
}







// test("Service returns 'Hello World!'", async () => {
//     try {
//       const response = await axios.get(process.env.SERVICE_ENDPOINT, {});
//       expect(response.data).toBe("hi all");
//     } catch (e) {
//       console.error(e);
//       throw e;
//     }
//   });
