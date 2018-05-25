const zigzag = a => {
    let lengthResult = 0;
    for (let start = 0; start < a.length; start++) {
        for (let end = start; end < a.length; end++) {
            let slice = a.slice(start, end);
            if (slice.length > lengthResult) {
                let zigZagClassInstance = new zigZag(slice);
                if (zigZagClassInstance.isZigZag) {
                    lengthResult = zigZagClassInstance.length;
                }
            }
        }
    }
    return lengthResult;
}

class zigZag {
    constructor(array) {
        this.length = array.length;
        this.list = this.makeList(array);
        this.isZigZag = this.inspectList(this.list);
    }

    makeList(array) {
        let head = {};
        let node = head;

        while (array.length !== 0) {
            node.value = array.shift();
            node.next = array.length === 0 ? null : {};
            node = node.next;
        }

        return head;
    }

    compareCurrentToNext(current, next) {
        if (current < next) { return -1 }
        else if (current > next) { return 1 }
        else { return 0 }
    }

    nextExpectant(lastItem) {
        if (lastItem === 0) { return false }
        return lastItem === 1 ? -1 : 1;
    }

    inspectList(list) {
        let followsRules = true, inspecting = true;
        if (!list) { return !followsRules }
        if (list.next === null) { return followsRules }
        if (list.value === list.next.value) { return !followsRules; }

        while (inspecting) {
            let current = list.value;
            if (!list.next) { inspecting = false; break; }
            let next = list.next.value;
            
            if (!list.expectedCompare) {
                list.next.expectedCompare = this.nextExpectant(this.compareCurrentToNext(current, next));
            } else {
                list.compare = this.compareCurrentToNext(current, next)
                if (list.compare !== list.expectedCompare) { followsRules = false; break; }
                list.next.expectedCompare = this.nextExpectant(list.expectedCompare)
            }

            if (!followsRules) { inspecting = false; }
            list = list.next;
        }


        return followsRules;
    }
}

module.exports = { fns: [ zigzag ] };
