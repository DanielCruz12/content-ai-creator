import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const aitemplates = pgTable('Aitemplates', {
    id: uuid('id').defaultRandom().notNull().primaryKey(),
    name: text('name').notNull(),
    desc: text('desc').notNull(),
    icon: text('icon'),
    category: text('category').notNull(),
    slug: text('slug').notNull(),
    aiPrompt: text('aiPrompt').notNull(),
    test: text('test').notNull(),
})

export const formFields = pgTable("formFields", {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    templateId: uuid("templateId").notNull().references(() => aitemplates.id),
    label: text("label").notNull(),
    field: text("field").notNull(),
    name: text("name").notNull(),
    required: boolean("required").notNull(),
    placeholder: text("placeholder"),
    input: text("input"),
});