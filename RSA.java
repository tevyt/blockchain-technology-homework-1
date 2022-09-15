import java.math.BigInteger;

public class Main {

    public static void main(String... args){
        BigInteger p = BigInteger.valueOf(53);
        BigInteger q = BigInteger.valueOf(37);

        BigInteger n = p.multiply(q);
        BigInteger z = p.subtract(BigInteger.ONE).multiply(q.subtract(BigInteger.ONE));

        System.out.println("n: " + n);
        System.out.println("z: " + z);

        BigInteger e = BigInteger.valueOf(367);
        BigInteger d = BigInteger.valueOf(607);

        int[] cypertext = new int[]{
               1860,
               1241,
               1834,
               1103,
               260,
               1869,
               1182,
               351,
               862
        };

        for(int c: cypertext){
            BigInteger m = BigInteger.valueOf(c).pow(607).mod(n);
            System.out.println(m);
        }



    }
}
