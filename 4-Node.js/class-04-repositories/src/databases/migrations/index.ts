import { sqliteconnection } from "..";
import { tableUsers } from "./tablesUsers";

export async function runMigrations() {
  const schemas = [tableUsers].join("");

  sqliteconnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}
