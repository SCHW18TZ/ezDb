import mongoose from "mongoose"
import { params } from "./interfaces/types"

export class ezDb {
 private db: typeof import("mongoose")
 private key: string

 constructor(data: params) {
  this.key = data.key
  mongoose.connect(this.key, data).then(mongoose => {
   this.db = mongoose
  })
 }

 public get database(): typeof import("mongoose") {
    return this.db
 }
}
