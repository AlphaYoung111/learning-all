package com.alphayoung.array;

/**
 * @author: yjr
 * @description:trangles
 * @date 2020/12/6 18:26
 */
public class YangHuiTran {
    public static void main(String[] args) {
        // 初始化
        int[][] triangleArr = new int[10][];
        for (int i = 0; i < triangleArr.length; i++) {
            // 第i行有i个元素
            triangleArr[i] = new int[i+1];
            // 每行第1个元素为1
            triangleArr[i][0] = 1;
            // 每行最后一个元素为1
            triangleArr[i][i] = 1;
            for (int j = 1; j <triangleArr[i].length - 1 ; j++) {
                triangleArr[i][j] = triangleArr[i -1][j-1] + triangleArr[i-1][j];
            }
        }

        // 输出结果
        for (int i = 0; i < triangleArr.length ; i++) {
            for (int j = 0; j <triangleArr[i].length ; j++) {
                System.out.print(triangleArr[i][j] + " ");
            }
            System.out.println();
        }


    }
}