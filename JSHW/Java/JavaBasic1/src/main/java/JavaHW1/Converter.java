package JavaHW1;

public class Converter {
    public double celsiusToKelvin(double celsius) {
        double kelvin = celsius + 273.15;
        return kelvin;
    }

    public double celsiusToFahrenheit(double celsius) {
        double fahrenheit = (celsius * 9 / 5) + 32;
        return fahrenheit;
    }

    public void convertToKelvinVoid(double celsius) {
        double kelvin = celsiusToKelvin(celsius);
        System.out.println(celsius + "°C is equal to " + kelvin + "K");
    }

    public void convertToFahrenheitVoid(double celsius) {
        double fahrenheit = celsiusToFahrenheit(celsius);
        System.out.println(celsius + "°C is equal to " + fahrenheit + "°F");
    }

    public double convertToKelvinReturn(double celsius) {
        return celsiusToKelvin(celsius);
    }

    public double convertToFahrenheitReturn(double celsius) {
        return celsiusToFahrenheit(celsius);
    }

    public static void main(String[] args) {
        double temperatureInCelsius = 25;

        Converter converter = new Converter();

        double kelvin = converter.celsiusToKelvin(temperatureInCelsius);
        System.out.println(temperatureInCelsius + "°C is equal to " + kelvin + "K");

        double fahrenheit = converter.celsiusToFahrenheit(temperatureInCelsius);
        System.out.println(temperatureInCelsius + "°C is equal to " + fahrenheit + "°F");

        converter.convertToKelvinVoid(temperatureInCelsius);
        converter.convertToFahrenheitVoid(temperatureInCelsius);

        double kelvinReturned = converter.convertToKelvinReturn(temperatureInCelsius);
        System.out.println(temperatureInCelsius + "°C is equal to " + kelvinReturned + "K");

        double fahrenheitReturned = converter.convertToFahrenheitReturn(temperatureInCelsius);
        System.out.println(temperatureInCelsius + "°C is equal to " + fahrenheitReturned + "°F");
    }
}
