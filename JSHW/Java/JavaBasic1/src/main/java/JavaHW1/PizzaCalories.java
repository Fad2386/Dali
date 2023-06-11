package JavaHW1;

public class PizzaCalories {
    public static void main(String[] args) {
        int originalDiameter = 24;
        int newDiameter = 28;
        int caloriePerSquareCentimeter = 40;

        int originalCalories = calculateCalories(originalDiameter, caloriePerSquareCentimeter);
        int newCalories = calculateCalories(newDiameter, caloriePerSquareCentimeter);
        int extraCalories = newCalories - originalCalories;

        System.out.println("Если вы замените пиццу диаметром " + originalDiameter + " см на пиццу диаметром " + newDiameter + " см,");
        System.out.println("лишних калорий будет съедено: " + extraCalories);
    }

    public static int calculateCalories(int diameter, int caloriePerSquareCentimeter) {
        double radius = diameter / 2.0;
        double area = Math.PI * Math.pow(radius, 2);
        int calories = (int) (area * caloriePerSquareCentimeter);
        return calories;
    }
}





