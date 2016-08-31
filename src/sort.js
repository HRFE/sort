/**
 * 排序基类
 */
class Sort {
    constructor(arr) {
        this.arr = arr;
    }
    
    /**
     * 排序方法
     */
    sort() {
        
    }

    /**
     * 打印数组
     */
    show() {
        console.log(this.arr)
    }

    /**
     * 判断数组是否有序
     */
    isSorted() {
        for (var i = 0; i < this.arr.length - 1; i++) {
            if (this.arr[i] > this.arr[i + 1]){
                return false;
            }    
        }
        return true;
    }
}

export default Sort;
