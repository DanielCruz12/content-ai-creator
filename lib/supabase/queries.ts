import db from "./db";
import { aitemplates } from "./schema";

export const getAiForms = async () => {
  try {
    const forms = await db.select().from(aitemplates);
    console.log(forms)
    return forms;
  } catch (error) {
    console.error("Error fetching AI forms:", error);
    return { data: null, error: "Failed to fetch AI forms" };
  }
};
