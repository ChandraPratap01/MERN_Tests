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
  it("checking whether the input is out of bound",async()=>{
    const answer=await request(app).post('/sum').send({
        a:10000000,
        b:4
    })
    expect(answer.body.message).toBe("The Number is too long");
  })
})


describe("checking all multiplication functionalites",()=>{
  beforeAll(async()=>{
    console.log("cleaning db");
    await resetDb();
  })


  it("checking whether the input is out of bound",async()=>{
    const answer=await request(app).post('/product').send({
        a:10000000,
        b:4
    })
    expect(answer.body.message).toBe("The number is too long");
  })

it("checkign multiply thing",async()=>{
  const answer=await request(app).post("/product").send({
    a:7,
    b:7
  })
  expect(answer.statusCode).toBe(200);
  expect(answer.body.answer).toBe(49);
   expect(answer.body.id).toEqual(expect.any(Number));
})
})
