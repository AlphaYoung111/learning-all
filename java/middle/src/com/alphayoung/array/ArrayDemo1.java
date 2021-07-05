package com.alphayoung.array;


/**
 * @author: yjr
 * @description:demo1
 * @date 2020/12/5 23:12
 */
public class ArrayDemo1 {
    public static void main(String[] args){
        // 静态初始化
        int[] a1;
        a1 = new int[]{100,111};
        // 动态初始化
        String[] a2 = new String[2];
        String[] a3 = new String[]{"ss","sss"};
        System.out.println(a1[0]);
        System.out.println(a2);
        System.out.println(a3.length);
        for (int i = 0;i<a1.length;i++){
            System.out.println(a1[i]);
        }


        // 二维数组
        int[][] arr1 = new int[][]{{10,20},{11,21}};
        int[][] arr2 = new int[3][2];
        arr2[1][0] = 1;
        int[][] arr3 ={{1,2},{4,5}};

        System.out.println(arr1[1][0]);
        System.out.println(arr2[1][0]);
    }
}