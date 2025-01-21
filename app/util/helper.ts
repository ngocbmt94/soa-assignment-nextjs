export const transformArraysToObjects = (input : string) : any => {
    if (Array.isArray(input)) {
      // Convert arrays into objects with string keys (index as string)
      return Object.fromEntries(input.map((item, index) => [index.toString(), item]));
    }
  
    if (typeof input === 'object' && input !== null) {
      // Recursively process all properties of objects
      return Object.keys(input).reduce((acc: any, key: string) => {
        acc[key] = transformArraysToObjects(input[key]);
        return acc;
      }, {});
    }
  
    // Return the value if it's neither an object nor an array
    return input;
  }