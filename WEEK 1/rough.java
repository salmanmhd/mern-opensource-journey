public class rough {
    public static void main(String[] args) {
        int n = 4;
        // 1 - _ _ _
        // _ _
        // _

        /*
         * 0
         * 0 0
         * 0 0 0
         * 0 0 0 0
         * 
         * 
         * 0
         * 0 0
         * 0 0 0
         * 0 0 0 0
         */

        for (int i = 1; i <= n; i++) {

            for (int j = n - i; j >= 1; j--) {
                System.out.print("_ ");
            }

            System.out.println();
        }
    }
}