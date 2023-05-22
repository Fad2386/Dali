package David;

public class DavidPractik {
    public static void main(String[] args) {
        byte x = 10;
        int y = x + 2;
        System.out.println(y);
    }
}
// byte 1 [-128,127] 0000 0001 = 1
                    // 0000 0010 = 2
                    // 1111 1111 = 255
                    //1000 0000 = -128
                    //0111 1111 = 127
//0000 0000 = 1 byte
//0000 0000 0000 0000 = 2 byte

//short 2 [-32K,32K]
//int 4 [2B.2B]
//long 8 [-2^63, 2^63-1]
//float 4
//double 8
//char 'A', 'B', '1'
//boolean false/true
