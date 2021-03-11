package com.google.sps.servlets;

import com.google.gson.Gson;
import com.google.sps.data.MyServerStats;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {

  private final String color = "My favorite color is royal blue";
  private final String hotSauce = "My favorite hot sauce is Tapatio";
  private final String food = "My favorite food is steak burrito";
  private final String spicyFact = "I love spicy food";

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Convert the server stats to JSON
    MyServerStats facts = new MyServerStats(color, hotSauce, food, spicyFact);
    String json = convertToJsonUsingGson(facts);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

   /**
   * Converts a ServerStats instance into a JSON string using the Gson library. Note: We first added
   * the Gson library dependency to pom.xml.
   */
  private String convertToJsonUsingGson(MyServerStats facts) {
    Gson gson = new Gson();
    String json = gson.toJson(facts);
    return json;
  }

}
