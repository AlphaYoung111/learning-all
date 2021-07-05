package com.alphayoung.array;

/**
 * @author: yjr
 * @description:冒泡排序
 * @date 2020/12/7 20:15
 */
public class BubbleSort {
    public static void main(String[] args) {
        int[] arr1 = new int[]{10,-5,70,82,66,75,42};
        for (int i = 0; i < arr1.length -1 ; i++) {
            for (int j = 0; j < arr1.length - 1 - i; j++) {
                if(arr1[j]>arr1[j + 1]){
                    int temp = arr1[j];
                    arr1[j] = arr1[j+1];
                    arr1[j+1] = temp;
                }
            }
        }

        for (int i = 0; i < arr1.length; i++) {
            System.out.print(arr1[i] + " ");
        }
    }
}