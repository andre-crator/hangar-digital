import { test } from "node:test";
import assert from "node:assert/strict";
import { diasAte } from "./diasAte.js";


test("vence amanhã", () => { 
  assert.equal(diasAte("2026-12-11","2026-12-10"), 1);
});  

test("vence hoje", () => {
    assert.equal(diasAte("2026-12-11","2026-12-11"), 0);
});

test("já venceu", () => {
    assert.equal(diasAte("2026-12-11","2026-12-12"), -1);
});

