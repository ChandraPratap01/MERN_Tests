"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const vitest_1 = require("vitest");
const __1 = require("..");
(0, vitest_1.describe)('Checking all the add functionalities', () => {
    (0, vitest_1.it)("Cheking add thing", () => __awaiter(void 0, void 0, void 0, function* () {
        const answer = yield (0, supertest_1.default)(__1.app).post("/sum").send({
            a: 8,
            b: 3
        });
        (0, vitest_1.expect)(answer.statusCode).toBe(200);
        (0, vitest_1.expect)(answer.body.answer).toBe(11);
        (0, vitest_1.expect)(answer.body.id).toBe(vitest_1.expect.any(Number));
    }));
    (0, vitest_1.it)("checking whether the input is outof bound", () => __awaiter(void 0, void 0, void 0, function* () {
        const answer = yield (0, supertest_1.default)(__1.app).post('/sum').send({
            a: 10000000,
            b: 4
        });
        (0, vitest_1.expect)(answer.body.message).toBe("The Number is too long");
    }));
});
