import request from "supertest"
import {beforeAll, beforeEach, describe, expect, it} from "vitest"
import { app } from ".."
import resetDb from "./helpers/reset-db"
describe('Checking all the add functionalities', () => {
    beforeAll(async()=>{
      console.log("Cleanig Db");
      await resetDb();
    })
  it("Cheking add thing",async()=>{
    const answer=await request(app).post("/sum").send({
        a:6,
        b:6
    })
    expect(answer.statusCode).toBe(200);
    expect( answer.body.answer).toBe(12);
    expect(answer.body.id).toEqual(expect.any(Number));
  })
  it("checking whether the input is outof bound",async()=>{
    const answer=await request(app).post('/sum').send({
        a:10000000,
        b:4
    })
    expect(answer.body.message).toBe("The Number is too long");
  })
})
