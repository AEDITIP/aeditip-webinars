import java.util.Scanner;
import java.time.*;

public class Pato {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Ejemplo de sesión
        /*String nombre; // int <- Números enteros
        int asistentes;

        System.out.println("Por favor, ingrese su nombre y el número de asistetes actual: ");
        nombre = sc.nextLine();
        asistentes = sc.nextInt();
        System.out.println("\nBienvenido, " + nombre + ", a nuestro Webinar!");
        System.out.println("Actualmente hay " + asistentes + " asistentes.");*/
        /*// Ejercicio 1
        System.out.println("Bienvenidos a nuestro Webinar");
        // Ejercicio 2
        String nombre;
        System.out.println("Por favor, ingrese su nombre:");
        nombre = sc.nextLine();
        System.out.println("\nBienvenido, " + nombre + ", a nuestro Webinar!");*/

        /*double ejemploVariable;
        final double ejemploConstante1;

        ejemploVariable = 2.5;
        ejemploConstante1 = 2.5;

        ejemploVariable = 5;
        //ejemploConstante1 = 6; // NO SE PUEDE HACER

        final double ejemploConstante2;

        ejemploVariable = sc.nextDouble();
        ejemploConstante2 = sc.nextDouble();

        System.out.println("Valor de la variable: " + ejemploVariable);
        System.out.println("Valor de la nueva constante: " + ejemploConstante2);*/

        // Ejercicio 4
        /*System.out.println("Escriba el radio de la circunferencia");
        final double pi = 3.141592;
        double radio = sc.nextDouble();
        double perimetro, area;

        perimetro = 2 * pi * radio;
        area = pi * radio * radio;

        System.out.println("Perímetro = " + perimetro + " u");
        System.out.println("Área = " + area + " u^2");*/

        /*String saludo = "Hola mundo!";
        System.out.println("Posición 2: " + saludo.charAt(2));
        System.out.println("Posición de 'u': " + saludo.indexOf('u'));
        System.out.println("Posición de 'ola': " + saludo.indexOf("ola"));
        System.out.println("Posición de 'pato': " + saludo.indexOf("pato"));*/

        /*String parte1 = "Hola";
        String parte2 = "Mundo";
        String parte3 = "Hola";
        System.out.println(parte1.concat(parte2));
        System.out.println(parte1.equals(parte2));
        System.out.println(parte1.equals(parte3));*/

        /*LocalDate fechaHoy = LocalDate.now();
        LocalTime horaHoy = LocalTime.now();*/
        LocalDateTime fechaHoraHoy = LocalDateTime.now();
        System.out.println(fechaHoraHoy.toLocalDate());
        System.out.println(fechaHoraHoy.toLocalTime());
        System.out.println(fechaHoraHoy);

        LocalDateTime modif1 = fechaHoraHoy.minusDays(2);
        System.out.println(modif1);

        LocalDateTime modif2 = fechaHoraHoy.plusDays(2);
        System.out.println(modif2);
    }
}