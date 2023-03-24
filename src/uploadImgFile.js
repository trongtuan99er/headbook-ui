import storage from './firebase';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

export async function uploadImage(image) {
  const storageRef = ref(storage, `user-photo/${Date.now()}-${image.name}`);
  
  const response = await uploadBytes(storageRef, image);
  const url = await getDownloadURL(response.ref);
  return url;
}
