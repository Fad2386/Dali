package JavaHW1;

import java.util.Scanner;

public class HW1 {
    public static void main(String[] args) {
        Scanner num = new Scanner(System.in);
        System.out.println("Enter number please");
        int number = num.nextInt();
        System.out.println(number);
        System.out.println(Integer.toOctalString(number));
        System.out.println(Integer.toBinaryString(number));
        System.out.println(Integer.toHexString(number));

        num.close();



    }
}
