
const { app } = require('@azure/functions');
const url = require('url');

// https://researchlab-cors-anywhere.azurewebsites.net/api/researchlab-cors-anywhere

app.http('researchlab-cors-anywhere', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);
    
    if (request.body) {
      let chunks = [];
      const reader = request.body.getReader(); // Get the reader once
    
      let chunk = await reader.read(); // Read the first chunk
      while (!chunk.done) { // While there's data to read
        chunks.push(chunk.value);
        chunk = await reader.read(); // Read the next chunk
      }
      
      // Once all chunks are read, release the lock
      reader.releaseLock();
    
      let body = Buffer.concat(chunks); // Concatenate all chunks into a single buffer
      return { body: body.toString() };
    }
    
  }
}); 
