export function isEmptyObject(obj:any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false; // The object is not empty
      }
    }
    return true; // The object is empty
  }