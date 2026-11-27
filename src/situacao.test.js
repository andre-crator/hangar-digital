//Testes nos limites: -1, 0, 7, 8, 30 e 31.

import { test } from "node:test";
import  assert  from "node:assert/strict";
import { situacao} from "./situacao.js";

test("-1 dia é vencida", () => { 
    assert.equal(situacao(-1), "vencida");
});

test("0 dias é urgente", () => {
    assert.equal(situacao(0), "urgente");
});
 
test("7 dias é urgente", () => {
    assert.equal(situacao(7), "urgente");
});

test("8 dias é a vencer", () => {
    assert.equal(situacao(8), "a vencer");
});

test("30 dias é a vencer", () => {
    assert.equal(situacao(30), "a vencer");
});

test("31 dias é em dia", () => {
    assert.equal(situacao(31), "em dia");
});


