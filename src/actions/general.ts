"use server";

import { connectDB } from "@/lib/db_connection";
import { Link } from "@/model/link.model";
import { QRcode } from "@/model/qrcode.model";
import { redirect } from "next/navigation";

const createNewShortURL = async (formData: FormData) => {
  // console.log("form triggered");
  const destinationLink = formData.get("destinationLink");
  let customBackHalf = formData.get("customBackHalf");

  // Input validation: check if we're getting data (:TODO)
  // Type checking: Create a new interface for it (:TODO)

  // console.log(destinationURL, customBackHalf);

  try {
    // if custom back half is there the ignore else create a short uuid
    if (customBackHalf) {
      const checkAvailableBacklink = await Link.findOne({
        shortLink: customBackHalf,
      });
      if (checkAvailableBacklink) {
        throw new Error("Back already taken");
      }
    }
    await connectDB();
    // create a new document in db
    const newURL = await Link.create({ destinationLink, shortLink: "test2" });
    console.log("✅✅", newURL);
    // if everything is fine, make a query to fetch all the urls
  } catch (error) {
    // handle unique contraint
    // not creating
  }
  redirect("/links");
};

const createNewQR = async (formData: FormData) => {
  console.log("✅qr form triggered");

  // take input
  const destinationLink = formData.get("destinationLink");

  // validate input (:TODO)
  // Type Checking (:TODO)

  try {
    await connectDB();
    // create new QR because no need checking
    const newQR = await QRcode.create({ destinationLink });
    console.log("✅✅new qr", newQR);
    if (!newQR) throw new Error("QR not created");
  } catch (error) {
    // handle error (:TODO)
  }
  // if all right redirect to '/qr-code'

  redirect("/qr-code");
};

export { createNewShortURL, createNewQR };
