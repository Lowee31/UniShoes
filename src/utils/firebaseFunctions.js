import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// saving new item
export const saveItem = async (data) => {
  await setDoc(
    doc(firestore, "shoesItem", `${Date.now()}`), data, {
    merge: true,
  });
};

// get all shoes items
export const getAllShoesItem = async () => {
  const items = await getDocs(
    query(collection(firestore, "shoesItem"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
}