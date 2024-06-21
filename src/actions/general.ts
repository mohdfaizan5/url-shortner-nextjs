"use server";

import { signIn, signOut } from "@/auth";
import { connectDB } from "@/lib/db_connection";
import { Link } from "@/model/link.model";
import { QRcode } from "@/model/qrcode.model";
import { redirect } from "next/navigation";
import { customAlphabet } from "nanoid/non-secure";

const createNewShortURL = async (formData: FormData) => {
  // console.log("form triggered");

  const destinationLink = formData.get("destinationLink") as string | undefined;
  let customBackHalf = formData.get("customBackHalf");
  let title = formData.get("title");

  // Input validation: check if we're getting data (:TODO)
  if (!destinationLink) {
    throw new Error("Required destination link to shorten");
  }
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
    } else {
      // create a new uuid
      const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 6);
      customBackHalf = nanoid(6);
    }

    await connectDB();
    // create a new document in db
    const newURL = await Link.create({
      destinationLink,
      shortLink: customBackHalf,
      title,
    });
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
  const title = formData.get("title") as string | undefined;

  // validate input (:TODO)
  // Type Checking (:TODO)

  try {
    await connectDB();
    // create new QR because no need checking
    const newQR = await QRcode.create({ destinationLink, title });
    console.log("✅✅new qr", newQR);
    if (!newQR) throw new Error("QR not created");
  } catch (error) {
    // handle error (:TODO)
  }
  // if all right redirect to '/qr-code'

  redirect("/qr-code");
};

const loginWithOauth = async (formData: FormData) => {
  console.log(formData);
  const provider = formData.get("action") as string;
  await signIn(provider, { redirectTo: "/home" });
};

const logOut = async () => {
  await signOut({ redirectTo: "/" });
};

export { createNewShortURL, createNewQR, loginWithOauth, logOut };
