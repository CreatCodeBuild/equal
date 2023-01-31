// deno-lint-ignore-file no-explicit-any
export function equal(x: any, y: any): string[] | void {
    if (x === y) {
        return
    }
    if (y instanceof Comparator) {
        return y.equal(x)
    }
    console.log(x, "|", y)
    if (x instanceof Comparator) {
        console.log("x is comparator")
        return x.equal(y)
    }
    console.log("x is not comparator")
    if (x instanceof Object) {
        const leftLen = Object.keys(x).length
        const rightLen = Object.keys(y).length
        if (!( leftLen=== rightLen)) {
            return [`left obj has keys [${Object.keys(x)}], but right obj has keys [${Object.keys(y)}]`]
        }
        for (const key in x) {
            if (key in y) {
                const err = equal(x[key], y[key])
                if(err) {
                    return [key].concat(err)
                }
                console.log("key", key)
            } else {
                return [`key ${key} is not in right object`]
            }
        }
        return
    }
    return [`${x} !== ${y}`]
}

abstract class Comparator {
    abstract equal(other: any): string[] | void
}

export class BiggerThan extends Comparator {
    constructor(public value: number) { super() }
    equal(other: any): string[] | void {
        console.log(other, this.value, other > this.value)
        if(other <= this.value) {
            return [`BiggerThan: ${this.value} <= ${other}`]
        }
    }
}

// export class IsArray extends {}

function toString(report: string[]): string {
    const path = report.slice(0, report.length-1).join(".")
    return `left.${path} !== right.${path} because ${report[report.length-1]}`
}

console.log(toString(["x", "0 <= 0"]))