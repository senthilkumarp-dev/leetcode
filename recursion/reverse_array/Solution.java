public class Solution{
    static void reverseArray(int[] arr, int start, int end) {
        if (start >= end) return;
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        reverseArray(arr, start + 1, end - 1);
    }

    static void printArray(int[] arr) {
        for (int num : arr) System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Original Array:");
        printArray(arr);

        reverseArray(arr, 0, arr.length - 1);

        System.out.println("Reversed Array:");
        printArray(arr);
    }
}
