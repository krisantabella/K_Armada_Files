//1. Multiplication Table Generator
public class LoopsPractice {
    public static void main(String[] args) {
        int number = 7; 

        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + (number * i));
        }
    }
}

//2. Sum of First N Natural Numbers
public class LoopsPractice {
    public static void main(String[] args) {
        int n = 7;  
        int sum = 0;

        for (int i = 1; i <= n; i++) {
            sum += i;  
        }
        System.out.println("The sum of the first " + n + " numbers is: " + sum);
    }
}

//3. Array Elements Printer
public class LoopsPractice {
    public static void main(String[] args) {
        int[] numbers = {1, 7, 8, 11, 12};

        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Array Element: " + numbers[i]); 
        }
    }
}

//4. Pattern Printer
public class LoopsPractice {
    public static void main(String[] args) {
         int n = 5; 

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println(); 
        }
    }
}

//5. Reverse Array Elements
public class LoopsPractice {
    public static void main(String[] args) {
        int[] numbers = {1, 7, 8, 11, 12}; 

        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.println("Reversed Element: " + numbers[i]);
        }
    }
}