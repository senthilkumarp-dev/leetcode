import java.util.Scanner;
public class Palindrome{
	public static void main(String[] args){
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter the Input :");
		String input = scanner.nextLine();
		System.out.println(isPalindrome(input,0,input.length()));
	}
	public static boolean isPalindrome(String str,int i ,int n){
		if(i >= n/2){
			return true;
		}
		if(str.charAt(i) != str.charAt(n- i -1));{
			return false;
		}
		return isPalindrome(str,i+1,n);
	}
}
