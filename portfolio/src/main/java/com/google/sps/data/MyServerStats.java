  
package com.google.sps.data;

/** Class containing server statistics. */
public final class MyServerStats {

  private final String color;
  private final String hotSauce;
  private final String food;
  private final String spicyFact;

  public MyServerStats(String color, String hotSauce, String food, String spicyFact) {
    this.color = color;
    this.hotSauce = hotSauce;
    this.food = food;
    this.spicyFact = spicyFact;
  }

  public String getColor() {
    return color;
  }

  public String getHotSauce() {
    return hotSauce;
  }

  public String getFood() {
    return food;
  }

  public String getSpicyFact() {
    return spicyFact;
  }
}