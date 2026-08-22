-- Rebrand internal identifiers from Documenso to Systemise.
--
-- Renaming the enum value keeps every existing row valid: Postgres references
-- enum members by OID, so rows using 'DOCUMENSO' read back as 'SYSTEMISE'
-- immediately and no row rewrite is needed.
ALTER TYPE "IdentityProvider" RENAME VALUE 'DOCUMENSO' TO 'SYSTEMISE';

-- The column default still points at the old label, so restate it.
ALTER TABLE "User" ALTER COLUMN "identityProvider" SET DEFAULT 'SYSTEMISE';

-- Service accounts and direct-template placeholders are matched by address in
-- application code, so move them onto the Systemise domain. These are no-ops on
-- an instance that never created them.
UPDATE "User" SET "email" = 'serviceaccount@systemise.dev' WHERE "email" = 'serviceaccount@documenso.com';
UPDATE "User" SET "email" = 'deleted-account@systemise.dev' WHERE "email" = 'deleted-account@documenso.com';
UPDATE "Recipient" SET "email" = 'direct.link@systemise.dev' WHERE "email" = 'direct.link@documenso.com';
UPDATE "Recipient" SET "email" = regexp_replace("email", '^recipient\.(\d+)@documenso\.com$', 'recipient.\1@systemise.dev')
  WHERE "email" ~ '^recipient\.\d+@documenso\.com$';
