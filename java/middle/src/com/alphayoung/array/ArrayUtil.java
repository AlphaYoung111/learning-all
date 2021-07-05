package com.alphayoung.array;

import java.util.Arrays;

/**
 * @author: yjr
 * @description:array工具类
 * @date 2020/12/9 19:45
 */
public class ArrayUtil {
    public static void main(String[] args) {
        // equal
        int[] arr1 = new int[]{1,2,3};
        int[] arr2 = new int[]{1,3,2};
        boolean b1 = Arrays.equals(arr1,arr2);
        System.out.printf(Arrays.toString(arr1));
        Arrays.sort(arr2);
        System.out.println(Arrays.toString(arr2));
        Arrays.fill(arr1,88);
        System.out.println(Arrays.toString(arr2));
        System.out.println(b1);
        System.out.println(Arrays.binarySearch(arr1,3));
    }
}