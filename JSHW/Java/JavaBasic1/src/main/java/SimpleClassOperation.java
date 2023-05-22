public class SimpleClassOperation {
    public static void main(String[] args) {

        boolean freeTime = true;
//        System.out.println(freeTime);

        byte q = 10;
        short w = 23_000;
        int e = -1_000_000;
        long l = 1_000_000_000_000_000_00L;
//        System.out.println(e);

        float t = 3.14F;
        double y = 2.71;
//        System.out.println(t);

        char u = 'q';
//        System.out.println(u);

        System.out.println(q + w);
        System.out.println(q - w);
        System.out.println(q * w);
        System.out.println(q / w);
//      System.out.println(q / 0);
        System.out.println(q + 0);
        System.out.println(q % 2);

        System.out.println(Byte.MIN_VALUE + " " + Byte.MAX_VALUE);
        System.out.println(Short.MIN_VALUE + " " + Short.MAX_VALUE);
        System.out.println(Integer.MIN_VALUE + " " + Integer.MAX_VALUE);

        System.out.println(Integer.MAX_VALUE + 1);
    }
}
