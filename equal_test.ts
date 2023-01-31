import { equal, BiggerThan } from "./equal.ts"
// url_test.ts
import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";

// Deno.test("basic", () => {
//     assertEquals(true, equal(1, 1));
//     assertEquals(true, equal("", ""));
//     assertEquals(true, equal(true, true));
//     assertEquals(true, equal(null, null));
//     assertEquals(true, equal(undefined, undefined));
//     assertEquals(true, equal(BigInt(1), BigInt(1)));
// });

Deno.test("basic", () => {
    assertEquals(undefined, equal(
        {},
        {}));
    assertEquals(undefined, equal(
        {
            x: {
                y: {
                    z: 2,
                    a: 1,
                },
                a: 1
            }
        },
        {
            x: {
                y: {
                    z: 2
                },
                a: 2
            }
        }))
});

// Deno.test("object", () => {
//     assertEquals(true, equal({}, {}));
//     assertEquals(true, equal({ x: 1 }, { x: 1 }));
//     assertEquals(true, equal({ x: 1, y: 2 }, { y: 2, x: 1 }));
//     assertEquals(false, equal({}, { x: undefined }));
//     console.log(equal({ x: undefined }, {}));
//     assertEquals(false, equal(
//         {
//             x: 1, y: {
//                 z: 1
//             }
//         },
//         {
//             x: 1, y: {
//                 z: 2
//             }
//         }
//     ));
//     console.log(equal({ x: 1 }, { x: 1, y: 2 }));

//     // nested
//     assertEquals(true, equal(
//         { x: 1, y: { z: 1 } },
//         { x: 1, y: { z: 1 } },
//     ))
// });

// Deno.test("Array", () => {
//     assertEquals(true, equal([], []));
//     assertEquals(true, equal([1], [1]));
//     assertEquals(false, equal([1, 2], [1]));
// });

Deno.test("Comparator", () => {
    assertEquals(undefined,
        equal(1, new BiggerThan(0)));
    // assertEquals(true,
    //     equal(new BiggerThan(0), 1));
    // assertEquals(true,
    //     equal(
    //         {
    //             x: new BiggerThan(0)
    //         },
    //         {
    //             x: 1
    //         }
    //     ));
    // assertEquals(true,
    //     equal(
    //         {
    //             x: 1
    //         },
    //         {
    //             x: new BiggerThan(0)
    //         },
    //     ));
    // assertEquals(true,
    //     equal(
    //         {
    //             x: 1,
    //             y: new BiggerThan(0)
    //         },
    //         {
    //             y: 2,
    //             x: new BiggerThan(0)
    //         },
    //     ));
    assertEquals(undefined,
        equal(
            {
                x: new BiggerThan(0),
                y: new BiggerThan(0)
            },
            {
                y: 2,
                x: 0
            },
        ));
    // // nested
    // assertEquals(true,
    //     equal(
    //         {
    //             x: {
    //                 z: new BiggerThan(-1)
    //             },
    //             y: new BiggerThan(0)
    //         },
    //         {
    //             y: 2,
    //             x: {
    //                 z: 0
    //             }
    //         },
    //     ));
});
