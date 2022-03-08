package euromillion.controllers.support;

import java.util.*;

public class Euro {

    private static List<Integer> getRandomUniqueIntegersSortedList(int listLength, int maxValue, List<Integer> forcedNumbers) {
        // generate <listLength> 0-<maxValue>-random numbers, included specified forced numbers (if any)
        Set<Integer> numbers = new HashSet<Integer>(forcedNumbers);
        while (numbers.size() < listLength) {
            numbers.add((int)Math.floor(Math.random() * maxValue + 1));
        } // Trick: Set does not allow duplicates

        Map<String, List<Integer>> bet = new HashMap<>();
        ArrayList<Integer> sortedNumbersList = new ArrayList<>(numbers);
        Collections.sort(sortedNumbersList);

        return sortedNumbersList;
    }

    private static Map<String, List<Integer>> getBet(List<Integer> forcedNumbers) {
        Map<String, List<Integer>> bet = new HashMap<>();
        bet.put("numbers",getRandomUniqueIntegersSortedList(5,50, forcedNumbers));
        bet.put("stars",getRandomUniqueIntegersSortedList(2,12, new ArrayList<>()));

        return bet;
    }

    public static Map<String, List<Integer>> getBet() {
        return getBet(new ArrayList<>());
    }

    public static Map<String, List<Integer>> getBetWithNumber(int number) {
        return getBet(Arrays.asList(number));
    }

    public static Map<String, List<Integer>> getBetWithSum(int sum) {
        Map<String, List<Integer>> bet = new HashMap<>();

        // min sum: 10 (0 1 2 3 4)
        if (sum < 15) {
            System.err.println("List sum can't be lower than 15... Returning invalid bet...");
            bet.put("numbers",Arrays.asList(-1,-1,-1,-1,-1));
        } else {
            List<Integer> l = new ArrayList<Integer>();
            while (l.size()!=5) {
                l= getMatchingSumListOrEmpty(sum,50,5);
            }
            bet.put("numbers",l);
        }

        bet.put("stars",getRandomUniqueIntegersSortedList(2,12, new ArrayList<>()));
        return bet;
    }

    private static List<Integer> getMatchingSumListOrEmpty(int sum, int max,int length) {
        List<Integer> l = getRandomUniqueIntegersSortedList(length-1,Math.min(max,sum), new ArrayList<>());
        List<Integer> ll = new ArrayList<Integer>();
        int currentListSum = l.get(0) + l.get(1) + l.get(2) + l.get(3);
        if (sum > currentListSum &&
                !l.contains(sum-currentListSum)) {
            l.add(sum-currentListSum);
            Collections.sort(l);
            return new ArrayList<Integer>();
        } else {
            return l;
        }
    }
}
