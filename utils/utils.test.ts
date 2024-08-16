import { describe, expect, test } from "@jest/globals";
import { createId } from "@/utils/utils";

describe("createId", () => {
  test("should generate an ID of the default length (8)", () => {
    const id = createId();
    expect(id).toHaveLength(8);
  });

  test("should generate an ID of the specified length", () => {
    const length = 12;
    const id = createId(length);
    expect(id).toHaveLength(length);
  });

  test("should generate different IDs on subsequent calls", () => {
    const id1 = createId();
    const id2 = createId();
    expect(id1).not.toBe(id2);
  });

  test("should only contain valid characters", () => {
    const id = createId();
    const validCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let char of id) {
      expect(validCharacters).toContain(char);
    }
  });

  test("should handle edge case of length 0", () => {
    const id = createId(0);
    expect(id).toHaveLength(8);
  });

  test("should handle edge case of negative length", () => {
    const id = createId(-5);
    expect(id).toHaveLength(8);
  });

  test("should handle edge case of very large length", () => {
    const length = 1000;
    const id = createId(length);
    expect(id).toHaveLength(length);
  });
});
