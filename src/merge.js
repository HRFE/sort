import Sort from './sort.js';

/**
 * 归并排序
 */
class Merge extends Sort{
    constructor(arr) {
        console.log('This is Merge sort:');
        super(arr);
    }

    /**
     * O(nlgn)
     * 
     * 思路：
     * 分治法。将数组一分为二， 对左右两边子数组分别进行排序，然后对两个有序数组进行归并，这样整个数组即可有序。
     * 针对子数组排序可以进行相同策略，再分为两个子数组进行如上步骤。当分割的子数组长度为1的时候自然是有序的。
     */

    /**
     * 排序入口 
     */
    sort() {
        this.mergeSort(this.arr, 0, this.arr.length - 1);
    }

    /**
     * 排序主算法
     * 先分治排序，然后调用有序数组的合并
     */
    mergeSort(arr, i, j) {
        if (i >= j) {
            return;
        }

        var mid = Math.floor((i + j) / 2);
        this.mergeSort(arr, i, mid);
        this.mergeSort(arr, mid + 1, j);
        this.merge(arr, i, mid, j);
    }

    /**
     * 合并两个有序数组
     */
    merge(arr, lo, mid, hi) {
        var cache = [];
        var i = lo, j = mid + 1;
        
        while (i <= mid && j <= hi) {
            if (arr[i] <= arr[j]) {
                cache.push(arr[i]);
                i++;
            } else {
                cache.push(arr[j]);
                j++;
            }
        }

        if (i > mid) {
            while (j <= hi) {
                cache.push(arr[j]);
                j++;
            }
        }

        if (j > hi) {
            while (i <= mid) {
                cache.push(arr[i]);
                i++;
            }
        }

        for (i = lo; i <= hi; i++) {
            arr[i] = cache[i - lo];
        }
    }
}

export default Merge;
