//Testes nos limites: -1, 0, 7, 8, 30 e 31.

import { test } from "node:test";
import  assert  from "node:assert/strict";
import { situacao} from "./situacao.js";

test("-1 dia é vencida", () => { 
    assert.equal(situacao(-1), "vencida");
});

test("0 dias é vencida", () => {
    assert.equal(situacao(0), "vencida");
});
 
test("7 dias é vencida", () => {
    assert.equal(situacao(7), "vencida");
});

test("8 dias é válida", () => {
    assert.equal(situacao(8), "válida");
});

test("30 dias é válida", () => {
    assert.equal(situacao(30), "válida");
});

test("31 dias é válida", () => {
    assert.equal(situacao(31), "válida");
});


