import Sort from './sort.js';

/**
 * 插入排序
 */
class Insert extends Sort{
    constructor(arr) {
        console.log('This is Insert sort:');
        super(arr);
    }

    sort() {
        /**
         * O(n*2)
         * 
         * 思路：
         * 从第二个元素开始循环，每次将当前元素与前一个元素进行比较，如果小于前一个元素则与之交换，然后重复与前比较
         * 直到前一个元素比当前元素大或者到达第一个元素
         * 重复以上步骤直到整个数组有序
         */
        for (var i = 1; i < this.arr.length; i++) {
            var cur = i;
            // 将当前元素与前边的所有元素比较并交换位置直到位置正确
            while (cur > 0 && this.arr[cur] < this.arr[cur - 1]) {
                [this.arr[cur], this.arr[cur - 1]] = [this.arr[cur - 1], this.arr[cur]];
                cur--;
            }
        }
    }
}

export default Insert;
