import { pgTable, pgEnum, uuid, text, boolean } from "drizzle-orm/pg-core"

export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])
export const oneTimeTokenType = pgEnum("one_time_token_type", ['confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token'])
export const equalityOp = pgEnum("equality_op", ['eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in'])
export const action = pgEnum("action", ['INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'ERROR'])


export const aitemplates = pgTable("Aitemplates", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	name: text("name").notNull(),
	desc: text("desc").notNull(),
	icon: text("icon"),
	category: text("category").notNull(),
	slug: text("slug").notNull(),
	aiPrompt: text("aiPrompt").notNull(),
});

export const formFields = pgTable("formFields", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	templateId: uuid("templateId").notNull().references(() => aitemplates.id),
	label: text("label").notNull(),
	field: text("field").notNull(),
	name: text("name").notNull(),
	required: boolean("required").notNull(),
	placeholder: text("placeholder"),
});