/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const { googleMapsClient } = require("./lib/utils/google_api")

const get_place_info = async (place) => {
  try {
    const info = await googleMapsClient.geocode({address: place}).asPromise();
    const { geometry, formatted_address } = info.json.results[0]; 
    const { location } = geometry;

    //  alternatively
    console.log(await googleMapsClient.findPlace({input: place, inputtype: "textquery"}).asPromise());
    console.log(`${place} is located at coordinates lat ${location["lat"]}, lng ${location["lng"]}, at the address ${formatted_address}.`);
  } catch (error) {
      console.log(error);
  }
}

const place_name = process.argv[2];
get_place_info(place_name);

