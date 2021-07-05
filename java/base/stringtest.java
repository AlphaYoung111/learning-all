class StringTest {
    public static void main(String[] args) {
        String s1 = "hello world";
        String s2 = "";
        String s3 = "1";
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        boolean b1 = true;
        String s4 = b1 + "a";
        System.out.println(s4);
        byte bb1 = -128;
        bb1--;
        int i = 20;
        int i1 = i++;
        System.out.println(i1);
    }
}