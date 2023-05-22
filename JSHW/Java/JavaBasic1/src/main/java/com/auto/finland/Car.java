package com.auto.finland;

public class Car {
    public double power;
    public int year = 2021;
    public String fabric = "Audi";

    public static int histYear = 1993;

    public void printParameters() {
        String result = "Our auto is " + fabric + ", year = " + year;
        System.out.println(result);
    }
}
