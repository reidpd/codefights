You and your friends took a road trip to attend your first summer music festival! Each of you came prepared with a list of artists you're interested in seeing, and you were all very excited on the trip over. But there's just one problem – once you got there, you pretty much instantly realized that you hate summer music festivals. 😠😢

Being out in the sun all day, crowded around thousands of strangers, breathing in filthy air, and dealing with overpriced food and drinks, you'd really just like to get out of there. But to avoid feeling like it was a total loss, you'd like each of your friends to be able to see at least one of the artists on their respective lists.

Given an array lineup of all the artists performing (in the order in which they'll be performing), and an array friends containing an array of artists' names that each friend is interested in, you'd like to find the smallest window of time possible for each of your friends to see at least one of their selected artists. In other words, find the shortest contiguous subarray of lineup that contains at least one string from each of the arrays in friends.

Example

For lineup = ["AJNA", "T Sisters", "Dick Stusso", "Sweet Plot", "Hot Flash Heat Wave", "Kikagaku Moyo", "Monophonics", "Knox Fortune", "Jack Harlow", "Gogo Penguin", "Nick Mulvey", "Durand Jones & The Indications", "Caleborate", "Freya Ridings", "Hobo Johnson & the LoveMakers", "Kailee Morgue", "Emmit Fenn", "Sasha Sloan", "Olivia O'Brien", "Mikky Ekko", "Lucy Dacus", "Pale Waves", "Dermot Kennedy", "AQUILO", "Shannon and the Clams", "Amen Dunes", "Cuco", "ELOHIM", "Saba", "Bahamas", "Poolside", "Quinn XCII", "Smokepurpp", "Whethan", "Lizzo", "LAUV", "The Mountain Goats", "Claptone", "Kelela", "Margo Price", "Sabrina Claudio", "Rex Orange County", "LP", "Jessie Reyez", "Chicano Batman", "GOLDLINK", "Perfume Genius", "Billie Eilish", "Daniel Caesar", "RAINBOW KITTEN SURPRISE", "Broken Social Scene", "BIG GIGANTIC", "SOB x RBE", "Tash Sultana", "THE GROWLERS", "Gryffin", "BORNS", "THE INTERNET", "Chromeo", "Carly Rae Jepsen", "Father John Misty", "TYCHO", "Mac Demarco", "Illenium", "Janelle Monae", "Jamie XX", "James Blake", "CHVRCHES", "N.E.R.D", "Portugal. The Man", "DJ Snake", "Bon Iver", "ODESZA", "Beck", "Future", "Janet Jackson", "Florence + the Machine", "The Weeknd"]
and friends = [["Janet Jackson", "CHVRCHES", "Carly Rae Jepsen"], ["Broken Social Scene", "Jamie XX", "Gogo Penguin", "TYCHO"], ["The Mountain Goats"]],
the output should be 24.

The shortest interval that would accommodate each friend would be from "The Mountain Goats" to "Carly Rae Jepsen", which covers 24 artists.

This way, friend 0 can see "Carly Rae Jepsen", friend 1 can see "Broken Social Scene", and friend 2 can see "The Mountain Goats".

Input / Output

[execution time limit] 4 seconds (js)

[input] array.string lineup

An array of names for each of the artists performing at the festival, in order of appearance. There are no duplicate artist names.

Guaranteed constraints:
1 ≤ lineup ≤ 2 · 104
1 ≤ lineup[i].length ≤ 32
lineup[i][j] ∈ {"A - Z", "a - z", "0 - 9", "!?$&'+-,.", space}

[input] array.array.string friends

An array containing each friend's list of preferred artists, in the form of an array of strings. It's guaranteed that none of your friends are interested in more than 104 artists.

Guaranteed constraints:
1 ≤ friends.length ≤ 10
1 ≤ friends[i].length < lineup.length
friends[i] ⊆ lineup

[output] integer

The length of the shortest list of consecutive artists that contains at least one artist from each friend's list.
