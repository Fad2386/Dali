package JavaHW1;

public class HW2 {
    public static void main(String[] args) {
        char num = '4';
        int result = Integer.parseInt(String.valueOf(num));
        int result1 = Character.getNumericValue(num);
        System.out.println(result + 6);
        System.out.println(result1 + 6);
    }
}
