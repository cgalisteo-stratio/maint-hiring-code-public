package euromillion.controllers;

import euromillion.controllers.support.Euro;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/euro")
public class EuroController {

    JSONObject response;
    JSONObject data;

    @GetMapping("/getBet")
    public String getBet() throws JSONException {
        response = new JSONObject();
        data = new JSONObject();
        data.put("message", "Bet");
        data.put("item", Euro.getBet());
        response.put("data", data);
        return response.toString(4);
    }

    @GetMapping("/getBetWithNumber")
    public String getBetWithNumber(@RequestParam(name = "number") String number) throws JSONException {
        response = new JSONObject();
        data = new JSONObject();
        data.put("message", "Bet with number: " + number);
        data.put("item", Euro.getBetWithNumber(Integer.parseInt(number)));
        response.put("data", data);
        return response.toString(4);
    }
    @GetMapping("/getBetWithSum")
    public String getBetWithSum(@RequestParam(name = "sum") String sum) throws JSONException {
        response = new JSONObject();
        data = new JSONObject();
        data.put("message", "Bet with sum: " + sum);
        data.put("item", Euro.getBetWithSum(Integer.parseInt(sum)));
        response.put("data", data);
        return response.toString(4);
    }
}