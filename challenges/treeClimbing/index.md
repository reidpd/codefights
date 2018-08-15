You and your friends had an enjoyable but challenging time rock climbing, so now you're aiming for something simpler - climbing trees! Since you weren't all able to climb the wall before, you'd like to find a tree where as many friends as possible can reach the top.

Given an array branches containing 2-element integer arrays of the form [height, weightLimit], and an array friends containing 2-element integer arrays of the form [reach, weight], find how many friends can reach the top of the tree.

Each friend is able to reach from one branch to another if their weight is less than or equal to the next branch's weightLimit and their reach is greater than or equal to the difference in height.

Since everyone is still a little sore from the rock climbing, no one will have the strength to help pull up the climber following below, so for this climb, each friend is on their own (but maybe we'll try again later once everyone's fully recovered).

NOTE: All friends start at a height of 0, so it's not guaranteed that the first branch is reachable

Example

For branches = [[3, 10], [6, 9], [7, 2], [10, 7], [11, 1], [12, 2], [18, 11]] and friends = [[4, 1], [7, 10], [6, 2], [7, 6]], the output should be treeClimbing(branches, friends) = 1.

example

Friend 0 only has a reach of 4, so they're not able to reach between the branches at heights 12 and 18
Friend 1 has a weight of 10, so they can only be supported by the branches at heights 3 and 18, but it would require a reach of 15 to get between them, so since their reach is only 7, they can't make it
Friend 2 has a weight of 2, so they can be supported by all the branches except the one at height 11. They can reach the top by grabbing the branches at heights 3, 6, 10, 12, and 18 (since the difference in heights is always less than or equal to their reach of 6)
Friend 3 can make it to the branch at height 10, but since they're too heavy for the branch at 12, and they can't quite reach from 10 to 18, they won't be able to reach the top
Since only one friend can climb this tree, it's not a very good choice. We should probably keep looking for a better climbing tree.

Input / Output

[execution time limit] 4 seconds (js)

[input] array.array.integer branches

An array of 2-element arrays representing the height and weightLimit of each branch, respectively. The array is sorted in ascending order of height, and each height is distinct.

Guaranteed constraints:
1 ≤ branches.length ≤ 1000
1 ≤ branches[0] ≤ 106
1 ≤ branches[1] ≤ 1000

[input] array.array.integer friends

An array of 2-element arrays representing the reach and weight of each friend, respectively. The array is not necessarily sorted.

Guaranteed constraints:
1 ≤ friends.length ≤ 1000
1 ≤ friends[0] ≤ 105
1 ≤ friends[1] ≤ 1000

[output] integer

An integer representing the number of friends who can reach the top branch of the tree. Note that for each branch along the path, including the top branch, the friend must have the reach to get to the height of the branch, and must have a weight less than or equal to the branch's weightLimit. It's not possible for a friend to reach the top if they can't be supported by the top branch.
