"use server";

import { sql } from "@vercel/postgres";
import { object, string, number, date, InferType } from "yup";

const schema = object({
  email: string().email().required(),
  website_url: string().url().required(),
});

export async function createListing(formData) {
  return schema
    .validate({
      email: formData.get("email"),
      website_url: formData.get("website_url"),
    })
    .then(async (valid) => {
      try {
        await sql`INSERT INTO submissions (email, website_url) VALUES (${valid.email}, ${valid.website_url})`;
        return {
          status: "success",
          message: "Congrats! You've successfully submitted your listing",
        };
      } catch (dbError) {
        console.error(dbError);
        return {
          status: "error",
          message: "An error occurred while submitting your listing.",
        };
      }
    })
    .catch((error) => {
      return { status: "error", message: "Invalid email or website url" };
    });
}
