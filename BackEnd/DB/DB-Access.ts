//access the db-path
import * as path from "path";
import * as fs from "fs";
class DBAccess {
  public dbPath!: string;
  async init() {
    /* In TypeScript (and JavaScript), `async init` typically refers to an asynchronous initialization method within 
        a class or module.This method is often used to perform setup tasks that require asynchronous operations,
          such as fetching data from an API, reading files, or connecting to a database.*/
    try {
    this.setPath;
    //we need to access the file system
    await fs.accessSync(this.dbPath);
    } catch (error) {
      console.log(error);
    }
  }
  getPath() {
    return path.join(__dirname, "db.json");
  }
  setPath(): void {
    this.dbPath = this.getPath();
  }
}
const dbAccess = new DBAccess();
console.log(dbAccess.getPath());
