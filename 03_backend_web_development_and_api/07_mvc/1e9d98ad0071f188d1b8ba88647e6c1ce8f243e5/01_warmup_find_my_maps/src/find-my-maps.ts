type MyObject = {
  objectType: string;
  quantity: number;
  description: string;
  storedIn: string;
};

export function findMyMaps(objects: MyObject[]): MyObject[] {
  return objects.filter((object) => {
    if (object.objectType === "map") {
      return object;
    }
  });
}
