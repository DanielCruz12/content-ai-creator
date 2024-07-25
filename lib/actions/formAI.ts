// lib/supabase/actions/formAI.ts
import { db } from "../supabase/db";
import { aitemplates } from "../supabase/schema";

export const getFormAiTemplates = async () => {
  const templates = await db
    .select({
      id: aitemplates.id,
      name: aitemplates.name,
      desc: aitemplates.desc,
      icon: aitemplates.icon,
      category: aitemplates.category,
      slug: aitemplates.slug,
      aiPrompt: aitemplates.aiPrompt,
    })
    .from(aitemplates);

  console.log(templates);
  return templates;
};
