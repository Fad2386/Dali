package Exsamples;

public class Exc1 {
    public static void main(String[] args) {
//        Примеры сужения
        byte q = 10;
        int w = 140;
        double e = 134.56;

        float a = (float) e;
        short b = (short) w;

        int c = (int) e;
        byte d = (byte) w;
        byte f = (byte) e;
        System.out.println(f);

    }
}
